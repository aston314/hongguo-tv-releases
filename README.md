# 红果短剧

红果短剧的 Android TV、macOS 和 Windows 安装包下载页。

## Android TV

[下载最新 Android TV 版本](https://github.com/aston314/hongguo-tv-releases/releases/latest)

支持 Android 6 及以上，提供 ARM64、ARMv7 和 x86_64 架构。

| 版本 | 文件 | 适用情况 |
| --- | --- | --- |
| 标准版 | `hongguo-tv-版本号.apk` | 默认推荐，使用 WebView 播放，失败时使用 Media3 回退 |
| MPV 版 | `hongguo-tv-mpv-版本号.apk` | 标准版黑屏、只有声音或无法播放时尝试 |

两个版本安装后的名称都为 **红果短剧**。MPV 版和标准版可同时安装，但账号、观看记录和设置彼此独立。

安装或升级时，请选择与当前版本相同的 APK 类型直接覆盖安装，无需卸载。普通用户只需要下载 `.apk`；`update.json`、`update-mpv.json` 和 `SHA256SUMS.txt` 用于应用更新或文件校验，不需要安装。

应用内检查更新入口：**我的 → 设置 → 版本更新**。标准版和 MPV 版使用各自的更新渠道，不会互相替换。

## macOS / Windows

[下载最新桌面版](https://github.com/aston314/hongguo-tv-releases/releases/tag/desktop-v0.2.63)

| 平台 | 文件 | 要求 |
| --- | --- | --- |
| macOS | `hongguo-desktop-0.2.63-macos-universal.zip` | macOS 11 及以上，支持 Intel 和 Apple Silicon |
| Windows | `hongguo-desktop-0.2.63-windows-x64.zip` | 64 位 Intel / AMD，需要 Microsoft Edge WebView2 Runtime |

macOS 解压后打开 **红果短剧.app**。Windows 请完整解压文件夹并打开 **红果短剧.exe**，不要单独启动 `hongguo-tv-core.exe`。桌面版在 **设置 → 版本更新** 中下载新的 ZIP，下载完成后退出应用，再替换整个应用或程序文件夹；安装由用户自己完成。

桌面版使用系统 HTML5 播放，实际 HEVC 播放能力取决于系统和硬件。桌面版支持键盘输入，不提供扫码输入。

## 播放问题

1. 先安装标准版并测试播放。
2. 如果出现黑屏、只有声音或无法播放，再安装 MPV 版测试。
3. MPV 版可在 **我的 → 设置 → 播放解码** 中选择自动解码或软件解码；软件解码对设备性能要求更高。
4. 仍然无法播放时，请提供应用内 **播放诊断** 截图，并注明设备型号、Android 版本和应用版本。

## 下载校验

每个 Release 都提供 `SHA256SUMS.txt`。下载异常时可使用 [ghfast.top](https://ghfast.top/) 加速 GitHub 文件链接；加速失败后可以尝试 GitHub 直连。

MPV 版使用的 LGPL 库源码和构建资料保留在私有源码仓库的 Release 中，使用 APK 不需要下载源码附件。

还有，抖音（douyin）你会喜欢的：

- [看直播TV版](https://github.com/aston314/doudou-tv-releases/releases/latest)

