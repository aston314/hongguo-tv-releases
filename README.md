# 红果短剧 Android TV 下载

此仓库发布正式安装包、版本信息、更新说明和 MPV 版所需的库源码附件。

- [最新正式版本](https://github.com/aston314/hongguo-tv-releases/releases/latest)
- 面向 Android TV，最低 Android 6，支持 ARM64、ARMv7 和 x86_64。
- 从 0.2.7 起支持应用内检查更新；默认使用 ghfast 加速下载，失败时尝试直连。

## 选择安装版本

| 版本 | 安装包 | 播放方式 |
| --- | --- | --- |
| 标准版 | `hongguo-tv-版本号.apk` | WebView 播放，失败时使用 Media3 兼容回退 |
| MPV 版 | `hongguo-tv-mpv-版本号.apk` | MPV 软件 HEVC 解码，适合对比测试标准版无法正常播放的设备 |

现有用户可以直接用标准版覆盖升级，保留账号、观看记录和设置。MPV 版使用独立包名，可与标准版同时安装；需要单独登录，本地记录和设置分别保存。两版均使用正式签名，各自升级时保留各自的数据。

MPV 版的流畅度和音画同步仍需结合设备性能验证。建议播放同一部剧，对比连续切集、暂停恢复和音画同步；异常时请提供应用内“播放诊断”的截图。

## 下载与更新

国内网络可在 GitHub 文件链接前加 `https://ghfast.top/` 下载。

标准版使用 `update.json`，MPV 版使用 `update-mpv.json` 作为固定更新入口，各自只升级对应版本。每个 Release 提供两个 APK、两个更新清单和 `SHA256SUMS.txt`，用于核对下载文件。

MPV 版还提供 `hongguo-tv-mpv-library-source-版本号.zip`，包含对应库源码、依赖、许可声明、补丁及构建和替换工具。使用 APK 无需下载源码附件；应用“我的 → 开源许可”也可离线查看许可信息。

还有，抖音（douyin）你会喜欢的：

- [看直播TV版](https://github.com/aston314/doudou-tv-releases/releases/latest)
