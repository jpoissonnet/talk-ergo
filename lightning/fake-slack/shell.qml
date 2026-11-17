import QtQuick
import Quickshell
import Quickshell.Wayland

ShellRoot {
    id: root

    readonly property string author: Quickshell.env("FAKE_SLACK_AUTHOR") || "Arthur Gaudard"
    readonly property string message: Quickshell.env("FAKE_SLACK_MSG") || "I need you!!!"
    readonly property string appName: Quickshell.env("FAKE_SLACK_APP") || "Slack"
    readonly property string channel: Quickshell.env("FAKE_SLACK_CHANNEL") || "Direct message"
    readonly property string icon: Quickshell.env("FAKE_SLACK_ICON") || "/usr/share/pixmaps/slack.png"
    readonly property int duration: parseInt(Quickshell.env("FAKE_SLACK_DURATION")) || 6000

    PanelWindow {
        id: win

        anchors {
            top: true
            right: true
        }
        margins {
            top: 76 
            right: 24
        }
        implicitWidth: 760
        implicitHeight: card.height + 40
        color: "transparent"

        WlrLayershell.namespace: "fake-slack"
        WlrLayershell.layer: WlrLayer.Overlay
        WlrLayershell.exclusiveZone: -1
        WlrLayershell.keyboardFocus: WlrKeyboardFocus.None

        Rectangle {
            id: card

            width: parent.width - 40
            height: content.implicitHeight + 64
            y: 20
            x: 20 + parent.width
            opacity: 0
            radius: 28
            color: "#1a1d21"
            border.color: "#35373b"
            border.width: 2

            Row {
                id: content

                anchors {
                    left: parent.left
                    right: parent.right
                    top: parent.top
                    margins: 32
                }
                spacing: 28

                Image {
                    source: "file://" + root.icon
                    width: 112
                    height: 112
                    sourceSize: Qt.size(224, 224)
                    fillMode: Image.PreserveAspectFit
                    smooth: true
                }

                Column {
                    width: parent.width - 112 - parent.spacing
                    spacing: 8

                    Text {
                        text: root.appName + " · " + root.channel + " · now"
                        color: "#ababad"
                        font.pixelSize: 24
                    }
                    Text {
                        width: parent.width
                        text: root.author
                        color: "#ffffff"
                        font.pixelSize: 40
                        font.bold: true
                        elide: Text.ElideRight
                    }
                    Text {
                        width: parent.width
                        text: root.message
                        color: "#d1d2d3"
                        font.pixelSize: 34
                        wrapMode: Text.Wrap
                    }
                }
            }

            ParallelAnimation {
                running: true
                NumberAnimation { target: card; property: "x"; to: 20; duration: 450; easing.type: Easing.OutBack; easing.overshoot: 0.8 }
                NumberAnimation { target: card; property: "opacity"; to: 1; duration: 250 }
            }

            SequentialAnimation {
                id: leave
                ParallelAnimation {
                    NumberAnimation { target: card; property: "x"; to: 20 + win.width; duration: 350; easing.type: Easing.InCubic }
                    NumberAnimation { target: card; property: "opacity"; to: 0; duration: 350 }
                }
                ScriptAction { script: Qt.quit() }
            }

            MouseArea {
                anchors.fill: parent
                onClicked: leave.start()
            }
        }

        Timer {
            interval: root.duration
            running: true
            onTriggered: leave.start()
        }
    }
}
