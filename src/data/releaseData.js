export const RELEASE_INFO = {
  version: "v1.7.1",
  versionId: "1.7.1",
  releaseDate: "2026-09-25",
  channel: "stable",
  hotfix: {
    version: "v1.7.1.1",
    size: "60.3 KB",
    sha256: "3534d04c3cd8956c9176385ca3efba07d91b21484335cd34e10d70d85a304fa1",
    cdnUrl: "https://mcw-download.pages.dev/hotfixes/v1.7.1.1.zip",
    manifestUrl: "https://mcw-download.pages.dev/hotfixes/manifest.json",
    edgeNodes: "Hồng Kông & Singapore (Asia Edge)",
  },
  downloads: {
    windows: {
      archive: {
        filename: "MCW-Launcher-v1.7.1-windows-x64.zip",
        size: "70.9 MB",
        sha256: "4949f9da9db422d809013269943e4f7e488362d40320e29bced4d9ef4e181f3c",
        githubUrl: "https://github.com/mahiru7229/mcw-launcher/releases/download/v1.7.1/MCW-Launcher-v1.7.1-windows-x64.zip",
        cdnUrl: "https://mcw-download.pages.dev/releases/v1.7.1/MCW-Launcher-v1.7.1-windows-x64.zip",
      }
    },
    linux: {
      archive: {
        filename: "MCW-Launcher-v1.7.1-linux-x64.zip",
        size: "111.1 MB",
        sha256: "1e500b7303abe13c2719330e226a93c60b11f7033072dea57f0acd4cdf170416",
        githubUrl: "https://github.com/mahiru7229/mcw-launcher/releases/download/v1.7.1/MCW-Launcher-v1.7.1-linux-x64.zip",
        cdnUrl: "https://mcw-download.pages.dev/releases/v1.7.1/MCW-Launcher-v1.7.1-linux-x64.zip",
      }
    },
    core: {
      wheel: {
        filename: "mcw_core-1.7.1-py3-none-any.whl",
        size: "635 KB",
        githubUrl: "https://github.com/mahiru7229/mcw-launcher/releases/download/v1.7.1/mcw_core-1.7.1-py3-none-any.whl",
        cdnUrl: "https://mcw-download.pages.dev/releases/v1.7.1/mcw_core-1.7.1-py3-none-any.whl",
      }
    }
  },
  changelog: [
    {
      type: "perf",
      title_vi: "Tăng tốc khởi động Launcher & Bộ đệm phần cứng GPU (Hotfix v1.7.1.1)",
      title_en: "Fast Launcher Startup & Hardware GPU Caching (Hotfix v1.7.1.1)",
      desc_vi: "Lưu đệm thông tin phần cứng GPU (DXGI/WMI) và đồng bộ Hotfix bất đồng bộ ở luồng nền, giúp rút ngắn tối đa thời gian mở ứng dụng.",
      desc_en: "Caches GPU hardware detection (DXGI/WMI) and runs hotfix checks asynchronously in the background for fast startup.",
    },
    {
      type: "feat",
      title_vi: "Hiển thị trực quan phiên bản Hotfix đang hoạt động",
      title_en: "Active Hotfix Version Visibility Across UI",
      desc_vi: "Hiển thị rõ ràng phiên bản Hotfix (v1.7.1 (Hotfix 1.7.1.1)) ngay trên màn hình khởi động Splash, Trang chủ, Cài đặt và thẻ Cập nhật.",
      desc_en: "Clearly displays the active hotfix version (v1.7.1 (Hotfix 1.7.1.1)) across the Splash screen, Home page, Settings, and Update card.",
    },
    {
      type: "fix",
      title_vi: "Tối ưu hóa giao diện Tạo Bản Chơi & Bridge cập nhật trực tiếp",
      title_en: "Refined Create Instance Dialog & Direct Update Bridge",
      desc_vi: "Căn chỉnh nút làm mới Modloader gọn gàng theo nội dung chữ và hỗ trợ nâng cấp trực tiếp từ v1.5.1 lên phiên bản mới nhất.",
      desc_en: "Fitted the modloader refresh button cleanly to its label and enabled direct upgrades from v1.5.1 to the latest release.",
    }
  ]
};

export const I18N = {
  vi: {
    nav: {
      features: "Tính Năng",
      compatibility: "Tương Thích",
      preview: "Giao Diện",
      benchmarks: "Kiến Trúc",
      faq: "Hỏi Đáp",
      download: "Tải Về",
    },
    hero: {
      badge: "Phiên bản mới nhất: v1.7.1 Stable (Hotfix 1.7.1.1)",
      headline: "Your World. Your Way.",
      subtitle: "A lightweight Minecraft launcher built for your next adventure.",
      desc: "Trình khởi chạy Minecraft mã nguồn mở với kiến trúc cô lập từng bản chơi, tự động cấp phát Java, hỗ trợ đầy đủ các modloader phổ biến và hệ thống cập nhật Edge CDN.",
      btn_download: "Tải Ngay v1.7.1",
      btn_explore: "Khám Phá Tính Năng",
      os_support: "Hỗ trợ Windows & Linux x64 • Giải nén chạy ngay không cần cài đặt",
    },
    preview: {
      tag: "Trải nghiệm giao diện",
      title: "Giao diện tinh gọn, hiện đại và tập trung",
      subtitle: "Mọi instance, modloader, runtime Java và modpack được quản lý trực quan trong một không gian duy nhất.",
      tab_overview: "Tổng quan",
      tab_mods: "Quản lý Mods",
      tab_settings: "Cài đặt Java",
      tab_logs: "Nhật ký game",
      play_button: "CHƠI NGAY",
      ready_status: "Sẵn sàng khởi chạy • Java 21 OpenJDK",
      instance_title: "Create: Arcane Engineering",
      instance_meta: "Minecraft 1.21.1 • Fabric 0.16.5 • 142 Mods",
    },
    features: {
      tag: "Tính năng cốt lõi",
      title: "Được thiết kế cho trải nghiệm Minecraft thuận tiện",
      subtitle: "Tập trung vào sự ổn định, quản lý bản chơi khoa học và tự động hóa toàn diện cho người chơi.",
      items: [
        {
          id: "lightweight",
          title: "Gọn nhẹ & Tối ưu phần cứng",
          desc: "Xây dựng trên giao diện Native PySide6 kết hợp bộ đệm phần cứng GPU và kiểm tra cập nhật bất đồng bộ, giúp tiết kiệm tài nguyên hệ thống cho trò chơi.",
        },
        {
          id: "isolation",
          title: "Khoang cách ly Instance độc lập",
          desc: "Mỗi bản chơi lưu trữ trong thư mục riêng biệt với mods, saves, shaders và cấu hình độc lập 100%, tránh xung đột giữa các phiên bản.",
        },
        {
          id: "java",
          title: "Tự động quản lý Java Runtimes",
          desc: "Tự động nhận diện phiên bản Minecraft và phân bổ bộ cài OpenJDK (Java 8, 17, 21) phù hợp từ Temurin/Zulu mà không cần cấu hình thủ công.",
        },
        {
          id: "modpack",
          title: "Tích hợp Modrinth & CurseForge",
          desc: "Tìm kiếm, duyệt và cài đặt modpack (.mrpack, CurseForge ZIP) hoặc mod lẻ thuận tiện kèm kiểm tra thư viện phụ thuộc.",
        },
        {
          id: "hotfix",
          title: "Bản vá vi mô Hotfix CDN Edge",
          desc: "Nhận các bản cập nhật vá lỗi nhỏ gọn từ Cloudflare Edge (Hồng Kông & Singapore) với cơ chế xác thực chữ ký SHA-256 an toàn.",
        },
        {
          id: "auth",
          title: "Xác thực Microsoft & Chế độ Offline",
          desc: "Đăng nhập qua giao thức Microsoft OAuth tiêu chuẩn, bảo mật thông tin phiên làm việc và hỗ trợ đầy đủ chế độ chơi mạng LAN / Offline.",
        },
      ]
    },
    compatibility: {
      tag: "Hệ sinh thái",
      title: "One launcher. Infinite worlds.",
      subtitle: "Hỗ trợ đầy đủ các nền tảng modding và phiên bản Minecraft từ cổ điển đến hiện đại.",
      loaders: [
        {
          name: "Vanilla",
          tag: "Nguyên bản",
          version: "1.0 → 1.21.x+",
          desc: "Trải nghiệm nguyên bản mượt mà, hỗ trợ cả bản Snapshot thử nghiệm và các bản phát hành lịch sử.",
          accent: "#6FE59C",
        },
        {
          name: "Fabric",
          tag: "Tối ưu FPS",
          version: "Khuyên dùng 1.16 → 1.21+",
          desc: "Nền tảng gọn nhẹ, tương thích tốt với Sodium, Iris Shaders và hệ sinh thái mod hiện đại.",
          accent: "#72D8FF",
        },
        {
          name: "Forge",
          tag: "Kinh điển",
          version: "1.7.10 → 1.20.1+",
          desc: "Cộng đồng mod phong phú với hàng nghìn modpack kỹ thuật, phép thuật và phiêu lưu.",
          accent: "#FCD34D",
        },
        {
          name: "NeoForge",
          tag: "Thế hệ mới",
          version: "1.20.4 → 1.21.x+",
          desc: "Nhánh phát triển hiện đại kế thừa từ Forge với kiến trúc tối ưu và hỗ trợ các phiên bản mới.",
          accent: "#F0A7D8",
        },
        {
          name: "Quilt",
          tag: "Linh hoạt",
          version: "Tương thích Fabric",
          desc: "Mở rộng từ hệ sinh thái Fabric với bộ công cụ linh hoạt và tương thích ngược hầu hết mod Fabric.",
          accent: "#8B8FF8",
        },
        {
          name: "Modpacks",
          tag: "1-Click Install",
          version: ".mrpack & .zip",
          desc: "Nhập trực tiếp các gói modpack từ Modrinth, CurseForge hoặc chia sẻ tệp ZIP với bạn bè.",
          accent: "#38BDF8",
        },
      ]
    },
    performance: {
      tag: "Kiến trúc vận hành",
      title: "Thiết kế hướng tới sự ổn định và minh bạch",
      subtitle: "Kiến trúc tách biệt giữa giao diện người dùng và nhân xử lý mcw-core, đảm bảo mọi quy trình khởi chạy và cập nhật đều rõ ràng, an toàn.",
      metrics: [
        {
          val: "4 Loaders",
          label: "Hỗ trợ Modloader đồng nhất",
          desc: "Quản lý Fabric, Forge, NeoForge và Quilt trực tiếp trên cùng một giao diện",
        },
        {
          val: "Java 8–21",
          label: "Cấp phát Runtime tự động",
          desc: "Tự động chọn và tải bộ OpenJDK tương thích với từng phiên bản Minecraft",
        },
        {
          val: "100%",
          label: "Cô lập thư viện & thế giới",
          desc: "Mỗi bản chơi hoạt động trong thư mục riêng, không đè cấu hình hay xung đột file",
        },
        {
          val: "SHA-256",
          label: "Xác thực tính toàn vẹn",
          desc: "Kiểm tra mã băm mọi tệp tải về và bản vá Hotfix từ cụm máy chủ Edge CDN",
        },
      ],
      terminal_title: "MCW Core Command Line & Status",
    },
    download: {
      tag: "Tải về miễn phí",
      title: "Ready to play?",
      subtitle: "Tải ngay MCW Launcher v1.7.1 dưới định dạng tệp ZIP giải nén dùng ngay hoặc tích hợp Core SDK.",
      detected_os: "Hệ điều hành nhận diện:",
      win_title: "Windows x64",
      win_format: "Định dạng Portable ZIP (.zip)",
      linux_title: "Linux x64",
      linux_format: "Định dạng Portable ZIP (.zip)",
      core_title: "MCW Core SDK",
      core_format: "Python Wheel (.whl)",
      btn_cdn: "Tải từ Asia Edge (HKG / SIN)",
      btn_github: "Tải từ GitHub Mirror",
      checksum_label: "SHA-256 Checksum:",
      copy_checksum: "Sao chép SHA-256",
      copied: "Đã sao chép!",
      view_changelog: "Xem nhật ký cập nhật v1.7.1",
      changelog_title: "Nhật ký cập nhật v1.7.1 Stable (Hotfix 1.7.1.1)",
    },
    faq: {
      tag: "Giải đáp thắc mắc",
      title: "Câu hỏi thường gặp",
      subtitle: "Mọi thông tin bạn cần biết về cách thức hoạt động và tính bảo mật của MCW Launcher.",
      items: [
        {
          q: "MCW Launcher có hoàn toàn miễn phí không?",
          a: "Có. MCW Launcher là dự án phần mềm nguồn mở 100% (Open Source), hoàn toàn miễn phí và không có quảng cáo, trả phí nội bộ hay thu thập dữ liệu người dùng.",
        },
        {
          q: "Launcher hỗ trợ những modloader nào?",
          a: "MCW Launcher hỗ trợ đầy đủ 4 modloader thông dụng nhất hiện nay: Fabric, Forge, NeoForge và Quilt. Bạn có thể chọn phiên bản modloader mong muốn khi tạo instance mới chỉ với 1 cú click.",
        },
        {
          q: "Tôi có cần phải cài đặt sẵn Java trước khi chơi không?",
          a: "Không cần thiết. MCW Launcher tích hợp hệ thống tự động phát hiện và tải bộ runtime Java OpenJDK (Java 8, 17, 21) tương thích chính xác với từng phiên bản Minecraft.",
        },
        {
          q: "Đăng nhập tài khoản Microsoft trên launcher có an toàn không?",
          a: "Tuyệt đối an toàn. Quá trình xác thực sử dụng giao thức Microsoft OAuth chính thức của Microsoft. Launcher không bao giờ yêu cầu hay lưu mật khẩu tài khoản của bạn.",
        },
        {
          q: "Dữ liệu game, thế giới (worlds) và mod được lưu trữ ở đâu?",
          a: "Mỗi bản chơi được lưu riêng biệt trong thư mục `instances/<Tên Bản Chơi>/`. Bạn có thể sao lưu, sao chép hoặc xóa bản chơi mà không làm ảnh hưởng đến các bản chơi khác.",
        },
        {
          q: "Cơ chế Hotfix CDN Edge hoạt động như thế nào?",
          a: "Khi phát hiện một bản vá nhỏ, hệ thống sẽ tải bản patch nén siêu nhỏ từ cụm CDN Cloudflare Edge (Hồng Kông & Singapore), kiểm tra mã băm SHA-256 và áp dụng an toàn mà không cần tải lại toàn bộ launcher.",
        },
        {
          q: "Tôi có thể chơi ngoại tuyến (Offline / LAN) không?",
          a: "Có. Launcher hỗ trợ chế độ chơi Offline với tên người dùng tự chọn, thuận tiện cho các buổi chơi cùng bạn bè qua mạng LAN nội bộ.",
        },
        {
          q: "Tôi có thể đóng góp mã nguồn hoặc báo lỗi ở đâu?",
          a: "Bạn có thể truy cập kho mã nguồn chính thức trên GitHub tại mahiru7229/mcw-launcher để đóng góp tính năng hoặc mở Issue phản ánh sự cố.",
        },
      ]
    },
    footer: {
      disclaimer_title: "Tuyên bố trách nhiệm pháp lý",
      disclaimer: "Not an official Minecraft product. Not approved by or associated with Mojang or Microsoft. Minecraft is a trademark of Mojang AB. MCW Launcher là dự án mã nguồn mở độc lập phát triển bởi cộng đồng.",
      quick_links: "Liên kết nhanh",
      resources: "Tài nguyên",
      author: "Phát triển bởi Huỳnh Ngọc Hoàng Tùng (@mahiru7229)",
      rights: "Tất cả các quyền được bảo lưu.",
    }
  },
  en: {
    nav: {
      features: "Features",
      compatibility: "Compatibility",
      preview: "Interface",
      benchmarks: "Architecture",
      faq: "FAQ",
      download: "Download",
    },
    hero: {
      badge: "Latest Release: v1.7.1 Stable (Hotfix 1.7.1.1)",
      headline: "Your World. Your Way.",
      subtitle: "A lightweight Minecraft launcher built for your next adventure.",
      desc: "An open-source Minecraft launcher featuring complete instance isolation, automatic Java management, native modpack support, and fast Edge CDN updates.",
      btn_download: "Download v1.7.1",
      btn_explore: "Explore Features",
      os_support: "Supports Windows & Linux x64 • Portable standalone zero-install",
    },
    preview: {
      tag: "UI Showcase",
      title: "Clean, Modern, and Focused Interface",
      subtitle: "Manage all your instances, modloaders, Java runtimes, and modpacks seamlessly in one unified interface.",
      tab_overview: "Overview",
      tab_mods: "Mod Manager",
      tab_settings: "Java Settings",
      tab_logs: "Game Logs",
      play_button: "PLAY NOW",
      ready_status: "Ready to launch • Java 21 OpenJDK detected",
      instance_title: "Create: Arcane Engineering",
      instance_meta: "Minecraft 1.21.1 • Fabric 0.16.5 • 142 Mods",
    },
    features: {
      tag: "Core Features",
      title: "Built for a Smooth Minecraft Experience",
      subtitle: "Focused on stability, organized instance management, and seamless automation for players.",
      items: [
        {
          id: "lightweight",
          title: "Native & Hardware Optimized",
          desc: "Built on a native PySide6 GUI with hardware GPU caching and non-blocking background sync to keep system overhead low.",
        },
        {
          id: "isolation",
          title: "Multiple Isolated Instances",
          desc: "Every profile lives in its own sandboxed folder with separate mods, configs, saves, and shaders to prevent version collisions.",
        },
        {
          id: "java",
          title: "Automatic Java Runtimes",
          desc: "Auto-detects Minecraft requirements and seamlessly provisions the matching OpenJDK (Java 8, 17, 21) from Temurin/Zulu.",
        },
        {
          id: "modpack",
          title: "Modrinth & CurseForge Native",
          desc: "Search, inspect, and install modpacks (.mrpack, CurseForge ZIP) and individual mods with automatic dependency resolution.",
        },
        {
          id: "hotfix",
          title: "Fail-Closed Hotfix CDN",
          desc: "Micro-patches distributed from Cloudflare Edge PoPs (Hong Kong & Singapore) with strict SHA-256 verification and atomic swap.",
        },
        {
          id: "auth",
          title: "Secure Microsoft OAuth & Offline",
          desc: "Official Microsoft OAuth login alongside convenient offline/LAN mode for local multiplayer sessions.",
        },
      ]
    },
    compatibility: {
      tag: "Ecosystem",
      title: "One launcher. Infinite worlds.",
      subtitle: "Comprehensive compatibility across modding platforms and Minecraft versions.",
      loaders: [
        {
          name: "Vanilla",
          tag: "Original",
          version: "1.0 → 1.21.x+",
          desc: "Pure vanilla experience supporting all historical versions, release channels, and latest snapshots.",
          accent: "#6FE59C",
        },
        {
          name: "Fabric",
          tag: "FPS Optimized",
          version: "1.16 → 1.21+",
          desc: "Lightweight modloader great for high performance with Sodium, Iris Shaders, and modern mods.",
          accent: "#72D8FF",
        },
        {
          name: "Forge",
          tag: "Classic",
          version: "1.7.10 → 1.20.1+",
          desc: "Extensive modding ecosystem supporting thousands of classic tech, magic, and adventure modpacks.",
          accent: "#FCD34D",
        },
        {
          name: "NeoForge",
          tag: "Next-Gen",
          version: "1.20.4 → 1.21.x+",
          desc: "Modern evolution of Forge with clean APIs and active support for latest Minecraft releases.",
          accent: "#F0A7D8",
        },
        {
          name: "Quilt",
          tag: "Flexible",
          version: "Fabric Compatible",
          desc: "Modular ecosystem offering rich modder APIs and backwards compatibility with most Fabric mods.",
          accent: "#8B8FF8",
        },
        {
          name: "Modpacks",
          tag: "1-Click",
          version: ".mrpack & .zip",
          desc: "Direct import support for Modrinth packages, CurseForge archives, and custom instance backups.",
          accent: "#38BDF8",
        },
      ]
    },
    performance: {
      tag: "Core Architecture",
      title: "Engineered for Stability and Transparency",
      subtitle: "Decoupled GUI and headless mcw-core engine ensuring every launch, mod install, and update is predictable and safe.",
      metrics: [
        {
          val: "4 Loaders",
          label: "Unified Modloader Support",
          desc: "Manage Fabric, Forge, NeoForge, and Quilt profiles in one unified workflow",
        },
        {
          val: "Java 8–21",
          label: "Automated OpenJDK Runtime",
          desc: "Automatically selects and provisions compatible Temurin/Zulu runtimes",
        },
        {
          val: "100%",
          label: "Folder & Config Isolation",
          desc: "Separate mods, saves, and settings per instance with zero file collisions",
        },
        {
          val: "SHA-256",
          label: "Verified Assets & Edge Hotfix",
          desc: "Cryptographic hash checks on every download and Cloudflare Edge micro-patch",
        },
      ],
      terminal_title: "MCW Core Command Line & Status",
    },
    download: {
      tag: "Free Download",
      title: "Ready to play?",
      subtitle: "Download MCW Launcher v1.7.1 as a standalone portable ZIP or integrate the Core Python SDK.",
      detected_os: "Detected Operating System:",
      win_title: "Windows x64",
      win_format: "Portable Standalone Archive (.zip)",
      linux_title: "Linux x64",
      linux_format: "Portable Standalone Archive (.zip)",
      core_title: "MCW Core SDK",
      core_format: "Python Package Wheel (.whl)",
      btn_cdn: "Download via Asia Edge (HKG / SIN)",
      btn_github: "Download via GitHub Mirror",
      checksum_label: "SHA-256 Checksum:",
      copy_checksum: "Copy SHA-256",
      copied: "Copied!",
      view_changelog: "View v1.7.1 Changelog",
      changelog_title: "Release Changelog — v1.7.1 Stable (Hotfix 1.7.1.1)",
    },
    faq: {
      tag: "FAQ",
      title: "Frequently Asked Questions",
      subtitle: "Everything you need to know about MCW Launcher features and security.",
      items: [
        {
          q: "Is MCW Launcher completely free?",
          a: "Yes. MCW Launcher is 100% open-source software, completely free of charge with no ads, paywalls, or telemetry trackers.",
        },
        {
          q: "Which modloaders are supported?",
          a: "MCW Launcher natively supports Fabric, Forge, NeoForge, and Quilt. You can choose any modloader and version when creating an instance.",
        },
        {
          q: "Do I need to install Java manually before playing?",
          a: "No. The launcher automatically detects Minecraft version requirements and provisions the correct OpenJDK runtime (Java 8, 17, 21) from Temurin/Zulu on demand.",
        },
        {
          q: "Is Microsoft Account login secure?",
          a: "Completely secure. Authentication uses official Microsoft OAuth standard flows. The launcher never asks for or stores your account password.",
        },
        {
          q: "Where are my worlds, mods, and instance files stored?",
          a: "Every instance is isolated in its own dedicated directory at `instances/<Instance_Name>/`. You can back up or migrate individual profiles without affecting others.",
        },
        {
          q: "How does the Edge CDN Hotfix system work?",
          a: "When a minor patch is published, the launcher downloads a micro-archive from Cloudflare Edge PoPs (Hong Kong & Singapore), verifies its SHA-256 checksum, and atomically applies it in seconds.",
        },
        {
          q: "Can I play offline or over a local LAN?",
          a: "Yes. Offline mode is fully supported with custom usernames, ideal for playing with friends over a local network.",
        },
        {
          q: "Where can I report bugs or contribute code?",
          a: "You can visit our official GitHub repository at mahiru7229/mcw-launcher to file issues or submit pull requests.",
        },
      ]
    },
    footer: {
      disclaimer_title: "Legal Disclaimer",
      disclaimer: "Not an official Minecraft product. Not approved by or associated with Mojang or Microsoft. Minecraft is a trademark of Mojang AB. MCW Launcher is an independent open-source project.",
      quick_links: "Quick Links",
      resources: "Resources",
      author: "Built by Huỳnh Ngọc Hoàng Tùng (@mahiru7229)",
      rights: "All rights reserved.",
    }
  }
};
