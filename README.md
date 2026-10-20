# 红果短剧下载（Android TV / webOS / Linux / macOS / Windows）

此仓库发布正式安装包、版本信息、更新说明和校验文件。MPV 库源码附件保留在私有源码仓库的 Release 中。

## 应用界面

<table>
  <tr>
    <td align="center"><img src="screenshots/new-releases.jpg" width="480" alt="新剧推荐：浏览近期上新的短剧" /><br /><sub>新剧推荐</sub></td>
    <td align="center"><img src="screenshots/search.jpg" width="480" alt="找剧：搜索并浏览短剧海报" /><br /><sub>搜索与海报浏览</sub></td>
  </tr>
  <tr>
    <td align="center"><img src="screenshots/ranking.jpg" width="480" alt="排行榜：查看不同榜单和热门短剧" /><br /><sub>热门榜单</sub></td>
    <td align="center"><img src="screenshots/related.jpg" width="480" alt="相关推荐：在选集弹窗中发现相似短剧" /><br /><sub>选集与相关推荐</sub></td>
  </tr>
</table>

- [Android TV 最新正式版本](https://github.com/aston314/hongguo-tv-releases/releases/latest)
- [LG webOS 测试版 `.ipk`](https://github.com/aston314/hongguo-tv-releases/releases/tag/webos-v0.2.98-test.20)
- [Linux x86_64 AppImage 测试版](https://github.com/aston314/hongguo-tv-releases/releases/tag/linux-v0.2.98-test.1)
- [桌面版下载（macOS / Windows）](https://github.com/aston314/hongguo-tv-releases/releases/tag/desktop-v0.2.98)
- 面向 Android TV，最低 Android 6，支持 ARM64、ARMv7 和 x86_64。
- Android 8.0/API 26 及以上设备可使用「红果精选」系统首页频道；Android 6/7.1 继续安装和使用应用，不提供该频道。
- 从 0.2.7 起支持应用内检查更新；默认使用 ghfast 加速下载，失败时尝试直连。

## Android TV 下载哪个版本？

**首次安装，或现有版本能正常播放：选标准版。**

**标准版黑屏、只有声音或无法播放：再试 MPV 版。** MPV 版默认自动解码，优先尝试硬件加速；可在 **“设置 → 播放解码”** 改为软件解码。软件解码对 CPU 性能要求更高，低性能盒子可能不够流畅，实际效果请在设备上测试。

打开 [最新正式版本](https://github.com/aston314/hongguo-tv-releases/releases/latest)，在 **Assets（附件）** 中选择：

| 版本 | 下载哪个 APK | 播放方式 |
| --- | --- | --- |
| **标准版** | **`hongguo-tv-版本号.apk`**（文件名不含 `mpv`） | WebView 播放，失败时使用 Media3 兼容回退 |
| **MPV 版** | **`hongguo-tv-mpv-版本号.apk`**（文件名含 `mpv`） | MPV 自动解码，可手动选择软件解码 |

例如当前标准版是 `hongguo-tv-0.2.98.apk`；MPV 版是 `hongguo-tv-mpv-0.2.98.apk`。两个 APK 都支持 ARM64、ARMv7 和 x86_64，无需按设备架构另选安装包。

两版安装后的名称均为 **红果短剧**；升级时请按原先安装的版本选择对应 APK，或使用应用内检查更新。

### 已安装的用户怎么升级？

- **原来的红果短剧 → 下载标准版覆盖安装**，保留账号、观看记录和设置，无需卸载。
- **已安装 MPV 版 → 下载 MPV 版覆盖安装**，保留该版本的数据。
- **想测试 MPV → 直接安装 MPV 版**，可与标准版同时存在。MPV 版需要单独登录，本地记录和设置分别保存，不会替换原标准版。
- 两版各自检查对应更新渠道，应用内更新不会把标准版改装成 MPV 版。

**普通用户只需下载 `.apk`。** `update.json`、`update-mpv.json` 和 `SHA256SUMS.txt` 是更新或校验文件，均无需安装。MPV 库源码附件不在公开下载仓库中。

测试 MPV 时，建议用同一集比较自动解码和软件解码的流畅度，并检查连续切集、暂停恢复和音画同步。解码设置会保存，下次播放或切集时生效；自动模式画面异常时可改为软件解码后重新播放。异常时请提供应用内“播放诊断”的截图，诊断会显示实际解码路径和可用的掉帧信息。

## Linux 桌面版测试包

[下载 Linux x86_64 AppImage 测试版](https://github.com/aston314/hongguo-tv-releases/releases/tag/linux-v0.2.98-test.1)，在 **Assets** 中下载 `hongguo-desktop-0.2.98-x86_64.AppImage`。当前只提供 64 位 x86_64 包。

此包依赖系统 WebKitGTK 4.1、GTK 3、GStreamer 和 HEVC/AAC 解码插件。在 Ubuntu 24.04 或 Debian 12 安装运行依赖：

```sh
sudo apt-get install libwebkit2gtk-4.1-0 gstreamer1.0-libav gstreamer1.0-plugins-good gstreamer1.0-plugins-bad gstreamer1.0-pulseaudio fonts-noto-cjk
```

下载后运行：

```sh
chmod +x hongguo-desktop-0.2.98-x86_64.AppImage
./hongguo-desktop-0.2.98-x86_64.AppImage --appimage-extract-and-run
```

AppImage 已在 Ubuntu 24.04 和 Debian 12 容器中通过真实红果数据及播放验证；CI 使用 Xvfb 和软件解码，尚未验证实体显卡、扬声器、Wayland 或其他发行版。Linux 不提供应用内更新，下载新版后退出应用并手动替换 AppImage。Linux 鼠标焦点高亮与 macOS/Windows 共用同一套桌面 UI 实现，Linux 实体桌面交互仍待用户反馈。

## LG webOS 测试版

[下载 webOS 测试版](https://github.com/aston314/hongguo-tv-releases/releases/tag/webos-v0.2.98-test.20)，在 Release 的 **Assets** 中下载 `hongguo-webos-0.2.98-test.20.ipk`。这是 LG webOS TV 的实验包，不是 Android APK，也不属于稳定版。

安装需要在电视上启用 **LG Developer Mode**，并使用 webOS 开发工具安装 `.ipk`。目前已完成真实数据请求、签名、解密和本地媒体代理的文件级验证，尚未在 LG 真机验证安装、遥控焦点或视频播放；不同型号的 HEVC/AAC 支持可能不同，不能保证一定能播放。

测试反馈请附上 LG 电视型号、webOS 版本、安装/启动结果、播放画面和声音情况，以及具体错误现象。

## macOS / Windows 桌面版

[桌面版 0.2.98 下载](https://github.com/aston314/hongguo-tv-releases/releases/tag/desktop-v0.2.98)。无需安装 APK，选择对应平台的 ZIP：

| 平台 | 下载文件 | 要求 |
| --- | --- | --- |
| **macOS** | `hongguo-desktop-0.2.98-macos-universal.zip` | macOS 11 及以上，同包支持 Intel 和 Apple Silicon |
| **Windows amd64 / x64** | `hongguo-desktop-0.2.98-windows-x64.zip` | 64 位 Intel / AMD 处理器，需要 Microsoft Edge WebView2 Runtime |

macOS 解压后打开 **红果短剧.app**；Windows 请**完整解压整个文件夹**，打开 `红果短剧.exe`，保留 `hongguo-tv-core.exe` 在同一目录，不要单独启动核心程序。Windows 缺少 WebView2 时，请从 [微软官方页面](https://developer.microsoft.com/microsoft-edge/webview2/) 安装 Runtime。

桌面版使用系统 HTML5 播放，HEVC 视频还需要 Windows 安装相应的系统解码扩展。优先从 Microsoft Store 安装 **HEVC Video Extensions**；商店无法获取时，可参考用户提供的[第三方离线扩展仓库](https://github.com/Ayx03/HEVCVideoExtension)。macOS 已实测真实播放和自动下一集，Windows 实体播放仍待实测。桌面版支持直接键盘输入和粘贴，不提供扫码输入。

### 桌面版怎么更新？

- 在 **设置 → 版本更新** 检查新版本，查看更新内容，点击 **下载更新 ZIP**。
- 每天后台检查一次；播放期间不弹出提醒。检查和下载优先使用 ghfast，失败后尝试直连。
- 下载显示进度，完成后核验大小、SHA256 和 ZIP 完整性；点击 **打开所在文件夹**。
- **安装由用户自己完成**：先退出应用，macOS 替换 `.app`；Windows 完整解压并替换程序文件夹，两个 EXE 必须一起更新。
- 账号、观看历史和设置保存在独立系统用户数据目录，正常替换程序不会删除这些数据。
- macOS 以新版 **红果短剧.app** 替换旧应用；Windows 用新版完整文件夹替换旧文件夹。账号、历史和设置保存在系统用户数据目录。

桌面版使用独立的 `desktop-update-v2.json`，不会读取或替换 Android 标准版/MPV 更新渠道。`*.sha256` 和更新清单是校验/更新资料，无需安装。

当前没有 Apple 开发者签名/公证或 Windows 代码签名，系统可能显示未知开发者提示。

## 下载与更新

左侧“我的”下方可进入 **设置**；版本检查在 **设置 → 版本更新**。MPV 版的解码选择和开源许可也在设置中。

国内网络可在 GitHub 文件链接前加 `https://ghfast.top/` 下载。

标准版使用 `update.json`，MPV 版使用 `update-mpv.json` 作为固定更新入口，各自只升级对应版本。每个 Release 提供两个 APK、两个更新清单和 `SHA256SUMS.txt`，用于核对下载文件。

MPV 版所需的 LGPL 库源码、依赖、许可声明、补丁及构建和替换工具随私有源码 Release 提供。使用 APK 无需下载源码附件；应用“设置 → 开源许可”也可离线查看许可信息。

还有，抖音（douyin）你会喜欢的：

- [看直播TV版](https://github.com/aston314/doudou-tv-releases/releases/latest)
