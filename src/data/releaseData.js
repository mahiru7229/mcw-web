export const RELEASE_INFO = {
  version: "v1.6.1",
  versionId: "1.6.1",
  releaseDate: "2026-09-23",
  channel: "stable",
  downloads: {
    windows: {
      installer: {
        filename: "MCW-Launcher-Setup-1.6.1.exe",
        size: "78.4 MB",
        sha256: "9b3c4f7a2d1e0f8c3a5b7e9d1a3c5e7f9b1d3f5a7c9e1b3d5f7a9c1e3b5d7f9a",
        githubUrl: "https://github.com/mahiru7229/mcw-launcher/releases/download/v1.6.1/MCW-Launcher-Setup-1.6.1.exe",
        cdnUrl: "https://mcw-download.pages.dev/releases/v1.6.1/MCW-Launcher-Setup-1.6.1.exe",
      },
      portable: {
        filename: "MCW Launcher.exe",
        size: "77.9 MB",
        sha256: "4a2b1c3d5e7f9a0b1c2d3e4f5a6b7c8d9e0f1a2b3c4d5e6f7a8b9c0d1e2f3a4b",
        githubUrl: "https://github.com/mahiru7229/mcw-launcher/releases/download/v1.6.1/MCW%20Launcher.exe",
        cdnUrl: "https://mcw-download.pages.dev/releases/v1.6.1/MCW%20Launcher.exe",
      },
      archive: {
        filename: "MCW-Launcher-v1.6.1-windows-x64.zip",
        size: "79.1 MB",
        githubUrl: "https://github.com/mahiru7229/mcw-launcher/releases/download/v1.6.1/MCW-Launcher-v1.6.1-windows-x64.zip",
        cdnUrl: "https://mcw-download.pages.dev/releases/v1.6.1/MCW-Launcher-v1.6.1-windows-x64.zip",
      }
    },
    linux: {
      binary: {
        filename: "mcw-launcher",
        size: "82.3 MB",
        sha256: "7c8d9e0f1a2b3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c2d3e4f5a6b7c8d",
        githubUrl: "https://github.com/mahiru7229/mcw-launcher/releases/download/v1.6.1/mcw-launcher",
        cdnUrl: "https://mcw-download.pages.dev/releases/v1.6.1/mcw-launcher",
      },
      archive: {
        filename: "MCW-Launcher-v1.6.1-linux-x64.zip",
        size: "83.0 MB",
        githubUrl: "https://github.com/mahiru7229/mcw-launcher/releases/download/v1.6.1/MCW-Launcher-v1.6.1-linux-x64.zip",
        cdnUrl: "https://mcw-download.pages.dev/releases/v1.6.1/MCW-Launcher-v1.6.1-linux-x64.zip",
      }
    },
    core: {
      wheel: {
        filename: "mcw_core-1.6.1-py3-none-any.whl",
        size: "623 KB",
        githubUrl: "https://github.com/mahiru7229/mcw-launcher-core/releases/download/v1.6.1/mcw_core-1.6.1-py3-none-any.whl",
        cdnUrl: "https://mcw-download.pages.dev/releases/v1.6.1/mcw_core-1.6.1-py3-none-any.whl",
      }
    }
  },
  changelog: [
    {
      type: "feat",
      title_vi: "Nút làm mới Modloader & Cơ chế Thử lại 5 lần",
      title_en: "Modloader Reload Button & 5-Attempt Network Retries",
      desc_vi: "Bổ sung nút nạp lại danh sách phiên bản modloader ngay trong giao diện Tạo Instance. Cơ chế tự động thử lại tối thiểu 5 lần với exponential backoff bảo vệ quá trình kết nối đến server NeoForge, Forge, Fabric, Quilt.",
      desc_en: "Added instant loader version reload button in the Create Instance dialog. Modloader metadata clients retry at least 5 times with exponential backoff on transient errors.",
    },
    {
      type: "fix",
      title_vi: "Khắc phục triệt để lỗi đường dẫn dài Windows (Issue #32)",
      title_en: "Full Extended Windows Path Support (Issue #32 Fix)",
      desc_vi: "Hỗ trợ tiền tố \\\\?\\ trên Windows cho toàn bộ thư viện lồng sâu của NeoForge 1.21.1 và Java Provisioner, không còn lo bị giới hạn MAX_PATH (260 ký tự).",
      desc_en: "Implemented \\\\?\\ extended prefix support across windows_path, protecting NeoForge 1.21.1 extraction and Java runtimes against the 260-character path limit.",
    },
    {
      type: "perf",
      title_vi: "Phân phối One-file siêu nhẹ & Chuẩn bị Cloudflare CDN",
      title_en: "One-file Standalone Executable & Cloudflare Edge CDN",
      desc_vi: "Định dạng đóng gói tệp thực thi duy nhất chống quét nhầm mã độc, tối ưu hóa kích thước và tương thích hoàn toàn với cụm máy chủ tải tốc độ cao tại Việt Nam.",
      desc_en: "Clean standalone single-executable packaging preventing false positives, optimized for fast edge CDN distribution.",
    }
  ]
};

export const I18N = {
  vi: {
    sidebar: {
      brand_sub: "TACTICAL HUD // INSTANCE-FIRST",
      status: "SYNC RATE: 100%",
      status_kaomoji: "SYSTEM: ONLINE (๑•̀ㅂ•́)و✧",
      home: "Tổng Quan",
      home_jp: "ホーム",
      features: "8 Trụ Cột Lõi",
      features_jp: "特長",
      comparison: "So Sánh Kiến Trúc",
      comparison_jp: "比較",
      download: "Tải Về",
      download_jp: "入手",
      core: "Dev Core SDK",
      core_jp: "開発者",
      download_btn: "Khởi Chạy v1.6.1",
    },
    hero: {
      badge: "✦ TACTICAL HUD // INSTANCE MATRIX v1.6.1 ✦",
      badge_jp: "「完全独立・高速起動」",
      title_1: "Trình Khởi Chạy",
      title_gradient: "MCW Launcher",
      title_2: "Chuẩn Mực Instance-First",
      subtitle: "Nền tảng khởi chạy Minecraft mã nguồn mở với kiến trúc khoang độc lập 100%. Vượt qua rào cản đường dẫn dài Windows, tự động cấp phát Java Temurin và đồng bộ cụm Server VN tốc độ cao.",
      btn_download: "Tải v1.6.1 Ngay",
      btn_explore: "Khám Phá Tính Năng",
      stat_loaders: "4 Mod Loaders Hỗ Trợ",
      stat_open: "100% Mã Nguồn Mở",
      stat_speed: "Server VN Tốc Độ Cao",
    },
    features: {
      tag: "CORE ARCHITECTURE // 8 TRỤ CỘT KỸ THUẬT",
      title: "Đồng Bộ Tuyệt Đối. Chuẩn Mực Instance-First.",
      subtitle: "Được chắt lọc từ tài liệu kỹ thuật của MCW Launcher, giải quyết triệt để mọi giới hạn cố hữu của launcher truyền thống.",
      filter_all: "Tất Cả (8)",
      filter_core: "Kiến Trúc Lõi",
      filter_mods: "Mods & Modpacks",
      filter_security: "Bảo Mật & Giao Diện",
      items: [
        {
          id: "isolation",
          category: "core",
          icon: "Layers",
          color: "text-asuka-red",
          border: "hover:border-asuka-red/60",
          badge: "ISOLATION // 独立",
          title: "Khoang Cách Ly Tuyệt Đối (Instance Isolation)",
          jp: "「完全独立・コンテナ分離」",
          desc: "Mỗi bản chơi là một khoang hoàn toàn biệt lập (instances/<Name>/) với instance.json, settings.json, mods, saves, shaders và Java riêng. Tích hợp bộ đếm giờ chơi, crash analytics và icon nhận diện độc quyền.",
          docRef: "docs/INSTANCE_SYSTEM.md"
        },
        {
          id: "long_path",
          category: "core",
          icon: "ShieldCheck",
          color: "text-asuka-flame",
          border: "hover:border-asuka-flame/60",
          badge: "LONG PATH // 安定",
          title: "Giải Phóng Giới Hạn MAX_PATH (32.767 Ký Tự)",
          jp: "「32,767文字パス完全解放」",
          desc: "Tự động chuẩn hóa tiền tố \\\\?\\ trên Windows cho toàn bộ thao tác sao chép, liên kết và giải nén. Tối ưu tên staging tạm .tmp_<hex>.pub, xóa sổ vĩnh viễn lỗi WinError 3 khi cài các modpack đồ sộ của NeoForge.",
          docRef: "docs/releases/v1.6.1.md"
        },
        {
          id: "auto_recovery",
          category: "core",
          icon: "RefreshCw",
          color: "text-amber-400",
          border: "hover:border-amber-500/60",
          badge: "RECOVERY // 回復",
          title: "Tự Phục Hồi 5 Lần & Nút Reload Tức Thì",
          jp: "「5回自動リトライ機構」",
          desc: "Hỗ trợ 4 Mod Loader (Fabric, Quilt, Forge, NeoForge). Nút Reload làm mới metadata trực tiếp; bộ nạp HttpDownloader tự động thử lại 5 lần với exponential backoff khi mạng timeout, chập chờn.",
          docRef: "docs/releases/v1.6.1.md"
        },
        {
          id: "mod_ecosystem",
          category: "mods",
          icon: "Sparkles",
          color: "text-cyan-400",
          border: "hover:border-cyan-500/60",
          badge: "ECOSYSTEM // 統合",
          title: "Hệ Sinh Thái Modrinth & CurseForge Native",
          jp: "「Modrinth＆CurseForge統合」",
          desc: "Tìm kiếm, duyệt và cài mod 1-click từ Modrinth. Tự động kéo required dependencies, xác minh hash SHA-1/SHA-512 chặt chẽ. Hỗ trợ nhập modpack .mrpack, CurseForge ZIP, FTB và ATLauncher an toàn sandbox.",
          docRef: "docs/MODRINTH_INTEGRATION.md"
        },
        {
          id: "java_managed",
          category: "core",
          icon: "Cpu",
          color: "text-cyber-neon",
          border: "hover:border-emerald-500/60",
          badge: "JAVA RUNTIME // 管理",
          title: "Cấp Phát Java Tự Động & Cơ Chế Repair",
          jp: "「Java自動検出＆修復」",
          desc: "Tự động phát hiện Java 8 đến 21+ trên máy hoặc tự tải Eclipse Temurin JDK chuẩn xác theo từng phiên bản game. Kiểm tra chữ ký số SHA-256 và cung cấp cơ chế tự động sửa chữa khi runtime bị lỗi.",
          docRef: "docs/ARCHITECTURE.md"
        },
        {
          id: "zero_trace",
          category: "security",
          icon: "Lock",
          color: "text-rose-400",
          border: "hover:border-rose-500/60",
          badge: "SECURITY // 防護",
          title: "Bảo Mật Zero-Trace (Microsoft & Offline)",
          jp: "「ゼロトレース認証」",
          desc: "Đăng nhập Microsoft chính chủ và chế độ chơi Offline. Access token chỉ lưu tạm thời trong bộ nhớ RAM, tuyệt đối không bao giờ ghi xuống ổ cứng hay rò rỉ trong file log/diagnostics bundle.",
          docRef: "docs/ARCHITECTURE.md"
        },
        {
          id: "theme_engine",
          category: "security",
          icon: "Palette",
          color: "text-purple-400",
          border: "hover:border-purple-500/60",
          badge: "CUSTOMIZE // 自由",
          title: "Theme Studio Contract v1 & Đa Ngôn Ngữ",
          jp: "「Theme Schema v6＆多言語」",
          desc: "Hỗ trợ chuẩn Theme Schema 6 với khả năng tùy biến màu sắc, âm thanh, animation và font chữ. Gói ngôn ngữ Tiếng Việt & Tiếng Anh đạt 100% parity với hơn 2.290 khóa dịch.",
          docRef: "docs/THEME_RUNTIME_CONTRACT.md"
        },
        {
          id: "updater_v2",
          category: "security",
          icon: "Zap",
          color: "text-amber-500",
          border: "hover:border-amber-500/60",
          badge: "UPDATER // 安全",
          title: "Bộ Cập Nhật Độc Lập Fail-Closed (Updater v2)",
          jp: "「独立アップデータv2」",
          desc: "Kiến trúc Updater v2 với binary MCW Updater riêng biệt. Xác thực chữ ký số SHA-256 sidecar trước khi ghi đè, đóng gói định dạng One-File Standalone siêu nhẹ cho Windows và Linux.",
          docRef: "docs/UPDATE_PACKAGES.md"
        }
      ]
    },
    comparison: {
      tag: "ARCHITECTURE BENCHMARK // SO SÁNH CHUẨN MỰC",
      title: "Sự Vượt Trội Về Kiến Trúc Kỹ Thuật",
      subtitle: "Giải quyết triệt để những bất cập cố hữu mà người chơi Minecraft gặp phải trong hơn 10 năm qua.",
      col_feature: "Tiêu Chí Kỹ Thuật",
      col_legacy: "Launcher Truyền Thống / Khác",
      col_mcw: "MCW Launcher (v1.6.1)",
      items: [
        {
          feature: "Cấu Trúc Thư Mục Game",
          legacy: "Dùng chung một thư mục .minecraft, dễ xung đột mod và hỏng file save",
          mcw: "Khoang cách ly độc lập 100% (instances/<Name>/) với settings, mods, saves riêng",
          highlight: true
        },
        {
          feature: "Đường Dẫn Windows (MAX_PATH)",
          legacy: "Giới hạn 260 ký tự, hay văng lỗi WinError 3 khi cài modpack nặng",
          mcw: "Chuẩn hóa tiền tố \\\\?\\ lên 32.767 ký tự + staging rút ngắn, không bao giờ lỗi",
          highlight: true
        },
        {
          feature: "Tải Metadata Mod Loader",
          legacy: "Mạng chập chờn là kẹt cache danh sách rỗng, phải tắt đi bật lại launcher",
          mcw: "Tự động thử lại 5 lần (Exponential Backoff) + Nút Reload nạp lại tức thì",
          highlight: false
        },
        {
          feature: "Quản Lý Java Runtime",
          legacy: "Bắt người dùng tự tìm, cài đặt và cấu hình biến môi trường Java thủ công",
          mcw: "Tự động cấp phát Eclipse Temurin (Java 8 - 21+), kiểm tra SHA-256 & auto-repair",
          highlight: false
        },
        {
          feature: "Cài Đặt Mods & Modpack",
          legacy: "Copy file thủ công, dễ thiếu mod phụ thuộc hoặc dính mã độc",
          mcw: "Tích hợp Modrinth/CurseForge, tự kéo dependency, sandbox chống Directory Traversal",
          highlight: false
        },
        {
          feature: "Bảo Mật Tài Khoản",
          legacy: "Lưu token hoặc mật khẩu dạng plaintext vào file cấu hình trên ổ cứng",
          mcw: "Zero-Trace: Microsoft access token chỉ giữ tạm trong RAM, không ghi file",
          highlight: true
        },
        {
          feature: "Định Dạng Phân Phối",
          legacy: "Bộ cài cồng kềnh, nhiều tệp DLL rời rạc hoặc AppData rác",
          mcw: "Tệp thực thi duy nhất One-File Standalone siêu nhẹ, không rác hệ thống",
          highlight: false
        }
      ]
    },
    download: {
      tag: "DEPLOYMENT // TRẠM TẢI XUỐNG",
      title: "Sẵn Sàng Triển Khai Ngay",
      subtitle: "Bản phát hành chính thức v1.6.1 gọn nhẹ, sẵn sàng khởi chạy chỉ sau vài giây.",
      detected: "Thiết bị nhận diện:",
      server_switch: "Chọn máy chủ:",
      server_cdn: "⚡ Server VN (Tốc độ cao)",
      server_github: "🌐 Server Quốc tế",
      windows_installer: "Bản Cài Đặt Windows (.exe)",
      windows_portable: "Bản Portable Windows (One-file)",
      linux_binary: "Bản Linux x64 (Standalone)",
      core_wheel: "Thư viện Python Core (.whl)",
      sha256_label: "SHA256",
      copy_sha256: "Copy SHA256",
      copied: "Đã copy!",
      view_changelog: "Chi Tiết v1.6.1",
    },
    core_hub: {
      tag: "PYTHON CORE SDK // 開発者向け",
      title: "Hệ Sinh Thái MCW Core",
      subtitle: "Toàn bộ sức mạnh của launcher được đóng gói thành thư viện Python độc lập mcw-core để bạn tự do phát triển bot hoặc công cụ tự động hóa.",
      install_cmd: "pip install mcw-core",
      example_tab_launch: "Khởi Động",
      example_tab_create: "Tạo Instance",
      example_tab_health: "Giám Sát Health",
      example_tab_cli: "CLI Script",
      read_docs: "Tài Liệu API",
      view_core_repo: "Mã Nguồn Core",
    },
    footer: {
      about_title: "MCW Launcher Project",
      about_desc: "Trình khởi chạy Minecraft mã nguồn mở độc lập với kiến trúc instance-first tiên tiến, tối ưu tốc độ và độ ổn định cao nhất.",
      links_title: "Liên Kết Dự Án",
      ecosystem_title: "Hệ Sinh Thái",
      disclaimer: "Tuyên bố: MCW Launcher là dự án mã nguồn mở độc lập, không liên kết với Mojang Studios hay Microsoft.",
    }
  },
  en: {
    sidebar: {
      brand_sub: "TACTICAL HUD // INSTANCE-FIRST",
      status: "SYNC RATE: 100%",
      status_kaomoji: "SYSTEM: ONLINE (๑•̀ㅂ•́)و✧",
      home: "Overview",
      home_jp: "ホーム",
      features: "8 Core Pillars",
      features_jp: "特長",
      comparison: "Architecture Spec",
      comparison_jp: "比較",
      download: "Download",
      download_jp: "入手",
      core: "Dev Core SDK",
      core_jp: "開発者",
      download_btn: "Launch v1.6.1",
    },
    hero: {
      badge: "✦ TACTICAL HUD // INSTANCE MATRIX v1.6.1 ✦",
      badge_jp: "「完全独立・高速起動」",
      title_1: "The Next-Gen",
      title_gradient: "MCW Launcher",
      title_2: "Pure Instance-First",
      subtitle: "The high-performance open-source Minecraft launcher with 100% isolated instances. Bypassing Windows long path limits, auto-provisioning Eclipse Temurin runtimes, and blazing fast edge downloads.",
      btn_download: "Download v1.6.1",
      btn_explore: "Explore Systems",
      stat_loaders: "4 Official Mod Loaders",
      stat_open: "100% Open Source",
      stat_speed: "Vietnam Server Fast",
    },
    features: {
      tag: "CORE ARCHITECTURE // 8 TECHNICAL PILLARS",
      title: "Absolute Synchronization. Zero Compromise.",
      subtitle: "Engineered specifically based on official MCW Launcher documentation to solve the biggest headaches in modded Minecraft.",
      filter_all: "All (8)",
      filter_core: "Core Engine",
      filter_mods: "Mods & Modpacks",
      filter_security: "Security & UX",
      items: [
        {
          id: "isolation",
          category: "core",
          icon: "Layers",
          color: "text-asuka-red",
          border: "hover:border-asuka-red/60",
          badge: "ISOLATION // 独立",
          title: "Plug Isolation (Independent Containers)",
          jp: "「完全独立・コンテナ分離」",
          desc: "Every instance is a self-contained environment (instances/<Name>/) with its own instance.json, settings.json, mods, saves, shaders, and Java. Features dedicated playtime tracking, crash diagnostics, and custom icons.",
          docRef: "docs/INSTANCE_SYSTEM.md"
        },
        {
          id: "long_path",
          category: "core",
          icon: "ShieldCheck",
          color: "text-asuka-flame",
          border: "hover:border-asuka-flame/60",
          badge: "LONG PATH // 安定",
          title: "Windows Long Path Bypass (32,767 Chars)",
          jp: "「32,767文字パス完全解放」",
          desc: "Automatically utilizes \\\\?\\ extended paths across copy, link, and file operations on Windows. Shortens staging files (.tmp_<hex>.pub), completely eradicating WinError 3 on deep NeoForge/Forge modpacks.",
          docRef: "docs/releases/v1.6.1.md"
        },
        {
          id: "auto_recovery",
          category: "core",
          icon: "RefreshCw",
          color: "text-amber-400",
          border: "hover:border-amber-500/60",
          badge: "RECOVERY // 回復",
          title: "5-Attempt Auto-Recovery & Instant Reload",
          jp: "「5回自動リトライ機構」",
          desc: "Full support for 4 Mod Loaders (Fabric, Quilt, Forge, NeoForge). Instant loader reload button cleans stale cache; HttpDownloader retries 5 times with exponential backoff on transient network drops.",
          docRef: "docs/releases/v1.6.1.md"
        },
        {
          id: "mod_ecosystem",
          category: "mods",
          icon: "Sparkles",
          color: "text-cyan-400",
          border: "hover:border-cyan-500/60",
          badge: "ECOSYSTEM // 統合",
          title: "Native Modrinth & CurseForge Integration",
          jp: "「Modrinth＆CurseForge統合」",
          desc: "Browse and install mods in 1 click from Modrinth. Automatically installs required dependencies, validates SHA-1/SHA-512 hashes, and imports .mrpack, CurseForge ZIP, FTB, and ATLauncher modpacks safely.",
          docRef: "docs/MODRINTH_INTEGRATION.md"
        },
        {
          id: "java_managed",
          category: "core",
          icon: "Cpu",
          color: "text-cyber-neon",
          border: "hover:border-emerald-500/60",
          badge: "JAVA RUNTIME // 管理",
          title: "Managed Java Runtime & Auto-Repair",
          jp: "「Java自動検出＆修復」",
          desc: "Auto-detects installed Java 8 to 21+ or provisions Eclipse Temurin runtimes matched to Minecraft versions. Validates SHA-256 digests and repairs corrupted runtimes automatically.",
          docRef: "docs/ARCHITECTURE.md"
        },
        {
          id: "zero_trace",
          category: "security",
          icon: "Lock",
          color: "text-rose-400",
          border: "hover:border-rose-500/60",
          badge: "SECURITY // 防護",
          title: "Zero-Trace Security (Microsoft & Offline)",
          jp: "「ゼロトレース認証」",
          desc: "Official Microsoft OAuth2 authentication and offline gameplay. Short-lived access tokens are strictly held in volatile RAM, never committed to disk, logs, or diagnostics bundles.",
          docRef: "docs/ARCHITECTURE.md"
        },
        {
          id: "theme_engine",
          category: "security",
          icon: "Palette",
          color: "text-purple-400",
          border: "hover:border-purple-500/60",
          badge: "CUSTOMIZE // 自由",
          title: "Theme Studio Contract v1 & 100% Localization",
          jp: "「Theme Schema v6＆多言語」",
          desc: "Frozen Theme Schema 6 with runtime animation, font, and audio customization. Bilingual language packs with 100% parity across 2,290+ translation keys.",
          docRef: "docs/THEME_RUNTIME_CONTRACT.md"
        },
        {
          id: "updater_v2",
          category: "security",
          icon: "Zap",
          color: "text-amber-500",
          border: "hover:border-amber-500/60",
          badge: "UPDATER // 安全",
          title: "Fail-Closed Updater Architecture v2",
          jp: "「独立アップデータv2」",
          desc: "Standalone updater binary verifying SHA-256 sidecar digests before extracting target releases. Packaged as a clean, portable single executable for Windows and Linux.",
          docRef: "docs/UPDATE_PACKAGES.md"
        }
      ]
    },
    comparison: {
      tag: "ARCHITECTURE BENCHMARK // SPEC COMPARISON",
      title: "Why MCW Launcher Outperforms Legacy Tools",
      subtitle: "Purpose-built architecture engineered to overcome limitations that have plagued Minecraft players for a decade.",
      col_feature: "Technical Criteria",
      col_legacy: "Legacy / Traditional Launchers",
      col_mcw: "MCW Launcher (v1.6.1)",
      items: [
        {
          feature: "Game Directory Structure",
          legacy: "Shared .minecraft directory, causing mod conflicts and world corruption",
          mcw: "100% isolated instance containers (instances/<Name>/) with own mods & saves",
          highlight: true
        },
        {
          feature: "Windows Path Length (MAX_PATH)",
          legacy: "Restricted to 260 characters, frequently throwing WinError 3 on big packs",
          mcw: "Extended \\\\?\\ prefix up to 32,767 chars with shortened staging, never fails",
          highlight: true
        },
        {
          feature: "Mod Loader Metadata Fetching",
          legacy: "Transient drops permanently lock empty lists, requiring full app restart",
          mcw: "5-attempt exponential backoff auto-recovery + instant one-click reload button",
          highlight: false
        },
        {
          feature: "Java Runtime Provisioning",
          legacy: "Forces players to search, download, and configure system Java manually",
          mcw: "Auto-detects or provisions Eclipse Temurin (Java 8 - 21+) with auto-repair",
          highlight: false
        },
        {
          feature: "Mod & Modpack Management",
          legacy: "Manual folder pasting, easy to miss dependencies or download malware",
          mcw: "Integrated Modrinth/CurseForge, auto-dependencies, traversal-safe sandbox",
          highlight: false
        },
        {
          feature: "Account Token Protection",
          legacy: "Plaintext token or password persistence inside config files on disk",
          mcw: "Zero-Trace: Microsoft access token held strictly in RAM, never saved to disk",
          highlight: true
        },
        {
          feature: "Packaging & Distribution",
          legacy: "Bulky installers, sprawling DLLs, and deep AppData clutter",
          mcw: "Clean one-file standalone executable with zero lingering background junk",
          highlight: false
        }
      ]
    },
    download: {
      tag: "DEPLOYMENT // TRẠM TẢI XUỐNG",
      title: "Ready For Launch",
      subtitle: "Official v1.6.1 stable builds packaged in clean, portable single-executable formats.",
      detected: "Detected system:",
      server_switch: "Select server:",
      server_cdn: "⚡ Server VN (High-Speed)",
      server_github: "🌐 Server Quốc tế",
      windows_installer: "Windows Installer (.exe)",
      windows_portable: "Windows Portable (One-file)",
      linux_binary: "Linux x64 (Standalone)",
      core_wheel: "Python Core Wheel (.whl)",
      sha256_label: "SHA256",
      copy_sha256: "Copy SHA256",
      copied: "Copied!",
      view_changelog: "v1.6.1 Notes",
    },
    core_hub: {
      tag: "PYTHON CORE SDK // 開発者向け",
      title: "Headless MCW Core Engine",
      subtitle: "The entire launcher engine is packaged into an independent mcw-core Python library, letting you build bots, automation pipelines, or custom tools.",
      install_cmd: "pip install mcw-core",
      example_tab_launch: "Launch",
      example_tab_create: "Create",
      example_tab_health: "Health Check",
      example_tab_cli: "CLI Script",
      read_docs: "API Docs",
      view_core_repo: "Core Repository",
    },
    footer: {
      about_title: "MCW Launcher Project",
      about_desc: "An independent open-source Minecraft launcher engineered with modern instance-first architecture: lightning fast, reliable, and uncompromising.",
      links_title: "Project Links",
      ecosystem_title: "Ecosystem",
      disclaimer: "Disclaimer: MCW Launcher is an independent open-source project and is not affiliated with Mojang Studios or Microsoft.",
    }
  }
};
