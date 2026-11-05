# 红果短剧下载（Android TV / webOS / Linux / macOS / Windows）

此仓库发布正式安装包、版本信息、更新说明和校验文件。

**[反馈问题 / 功能建议](https://github.com/aston314/hongguo-tv-releases/issues/new/choose)**：选择对应模板并附上设备信息和播放诊断。

## 当前版本

- [Android TV 最新正式版本](https://github.com/aston314/hongguo-tv-releases/releases/tag/v0.2.149)
- [LG webOS 测试版 `.ipk`](https://github.com/aston314/hongguo-tv-releases/releases/tag/webos-v0.2.149-test.27)
- [Linux x86_64 AppImage 测试版](https://github.com/aston314/hongguo-tv-releases/releases/tag/linux-v0.2.149-test.1)
- [桌面版下载（macOS / Windows）](https://github.com/aston314/hongguo-tv-releases/releases/tag/desktop-v0.2.149)

本版优化切集、切剧体验，提升播放地址获取稳定性；调整追更分类与更新提醒。

## Android TV

最低支持 Android 6，支持 ARM64、ARMv7 和 x86_64。首次安装或标准版播放正常时，选择标准版；标准版无法播放时再试 MPV 版。

| 版本 | 下载文件 | 播放方式 |
| --- | --- | --- |
| 标准版 | `hongguo-tv-0.2.149.apk` | HTML5 主播放，失败时有限切换到 Media3 |
| MPV 版 | `hongguo-tv-mpv-0.2.149.apk` | MPV 自动解码，可手动选择软件解码 |

两个 APK 支持同一组 Android ABI。MPV 版与标准版是独立应用，可以同时安装，但账号、历史和设置分别保存。

## 桌面版

[桌面版 0.2.149](https://github.com/aston314/hongguo-tv-releases/releases/tag/desktop-v0.2.149) 提供 macOS 通用 ZIP 和 Windows x64 ZIP。macOS 需要 11 或更高版本；Windows 需要 Microsoft Edge WebView2 Runtime，播放 HEVC 还需要系统 HEVC Video Extensions。

## webOS

[webOS 0.2.149 测试版](https://github.com/aston314/hongguo-tv-releases/releases/tag/webos-v0.2.149-test.27) 需要 LG Developer Mode 和 webOS 开发工具安装。它是同一应用版本的独立手动测试构建，使用现有 HTML5 播放流程，属于测试版渠道。

## Linux

[Linux x86_64 AppImage 0.2.149 测试版](https://github.com/aston314/hongguo-tv-releases/releases/tag/linux-v0.2.149-test.1) 依赖系统 WebKitGTK、GTK 3、GStreamer 及 HEVC/AAC 解码插件。下载后为文件增加执行权限，再运行 AppImage。

## 更新与反馈

Android 标准版使用 `update.json`，MPV 版使用 `update-mpv.json`。普通用户只需下载 APK；更新清单和校验文件用于应用内更新或核对文件完整性。

播放异常请附设备型号、Android/webOS/桌面系统版本、使用的安装包，以及应用内“播放诊断”截图。Windows 播放 HEVC 时请同时确认系统已安装 HEVC Video Extensions。
