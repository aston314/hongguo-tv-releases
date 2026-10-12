# 红果短剧 Android TV 下载

此仓库发布正式安装包、版本信息、更新说明和 MPV 版所需的库源码附件。

- [最新正式版本](https://github.com/aston314/hongguo-tv-releases/releases/latest)
- 面向 Android TV，最低 Android 6，支持 ARM64、ARMv7 和 x86_64。
- 从 0.2.7 起支持应用内检查更新；默认使用 ghfast 加速下载，失败时尝试直连。

## 下载哪个版本？

**首次安装，或现有版本能正常播放：选标准版。**

**标准版黑屏、只有声音或无法播放：再试 MPV 版。** MPV 版用软件解码 HEVC 视频，对 CPU 性能要求更高；低性能盒子可能不够流畅，实际效果请在设备上测试。

打开 [最新正式版本](https://github.com/aston314/hongguo-tv-releases/releases/latest)，在 **Assets（附件）** 中选择：

| 版本 | 下载哪个 APK | 播放方式 |
| --- | --- | --- |
| **标准版** | **`hongguo-tv-版本号.apk`**（文件名不含 `mpv`） | WebView 播放，失败时使用 Media3 兼容回退 |
| **MPV 版** | **`hongguo-tv-mpv-版本号.apk`**（文件名含 `mpv`） | MPV 软件 HEVC 解码 |

例如 v0.2.47 的标准版是 `hongguo-tv-0.2.47.apk`，约 **17.5 MB**；MPV 版是 `hongguo-tv-mpv-0.2.47.apk`，约 **35.2 MB**。两个 APK 都支持 ARM64、ARMv7 和 x86_64，无需按设备架构另选安装包。

### 已安装的用户怎么升级？

- **原来的红果短剧 → 下载标准版覆盖安装**，保留账号、观看记录和设置，无需卸载。
- **已安装红果短剧 MPV → 下载 MPV 版覆盖安装**，保留该版本的数据。
- **想测试 MPV → 直接安装 MPV 版**，可与标准版同时存在。MPV 版需要单独登录，本地记录和设置分别保存，不会替换原标准版。
- 两版各自检查对应更新渠道，应用内更新不会把标准版改装成 MPV 版。

**普通用户只需下载 `.apk`。** `library-source-版本号.zip` 是 MPV 库的源码和许可附件；`update.json`、`update-mpv.json` 和 `SHA256SUMS.txt` 是更新或校验文件，均无需安装。

测试 MPV 时，建议播放同一部剧，检查连续切集、暂停恢复和音画同步；异常时请提供应用内“播放诊断”的截图。

## 下载与更新

国内网络可在 GitHub 文件链接前加 `https://ghfast.top/` 下载。

标准版使用 `update.json`，MPV 版使用 `update-mpv.json` 作为固定更新入口，各自只升级对应版本。每个 Release 提供两个 APK、两个更新清单和 `SHA256SUMS.txt`，用于核对下载文件。

MPV 版还提供 `hongguo-tv-mpv-library-source-版本号.zip`，包含对应库源码、依赖、许可声明、补丁及构建和替换工具。使用 APK 无需下载源码附件；应用“我的 → 开源许可”也可离线查看许可信息。

还有，抖音（douyin）你会喜欢的：

- [看直播TV版](https://github.com/aston314/doudou-tv-releases/releases/latest)
