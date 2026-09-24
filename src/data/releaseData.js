export const RELEASE_INFO = {
  version: "v1.7.0",
  versionId: "1.7.0",
  releaseDate: "2026-09-24",
  channel: "stable",
  hotfix: {
    version: "v1.7.0.1",
    size: "4.8 KB",
    sha256: "f6e749a8557a989f834c0dc77400e7db84ebc8377e2b5d8d6a593f034595f858",
    cdnUrl: "https://mcw-download.pages.dev/hotfixes/v1.7.0.1.zip",
    manifestUrl: "https://mcw-download.pages.dev/hotfixes/manifest.json",
    edgeNodes: "Hồng Kông & Singapore (Asia Edge)",
  },
  downloads: {
    windows: {
      archive: {
        filename: "MCW-Launcher-v1.7.0-windows-x64.zip",
        size: "70.9 MB",
        sha256: "8aaca319c0f086c65209eeb971a46c80c285af97e06039653d1c908647d524a7",
        githubUrl: "https://github.com/mahiru7229/mcw-launcher/releases/download/v1.7.0/MCW-Launcher-v1.7.0-windows-x64.zip",
        cdnUrl: "https://mcw-download.pages.dev/releases/v1.7.0/MCW-Launcher-v1.7.0-windows-x64.zip",
      }
    },
    linux: {
      archive: {
        filename: "MCW-Launcher-v1.7.0-linux-x64.zip",
        size: "111.1 MB",
        sha256: "c981471616287c9c14577566d446fa504a900ca22e87294387d4c38c836c31b3",
        githubUrl: "https://github.com/mahiru7229/mcw-launcher/releases/download/v1.7.0/MCW-Launcher-v1.7.0-linux-x64.zip",
        cdnUrl: "https://mcw-download.pages.dev/releases/v1.7.0/MCW-Launcher-v1.7.0-linux-x64.zip",
      }
    },
    core: {
      wheel: {
        filename: "mcw_core-1.7.0-py3-none-any.whl",
        size: "635 KB",
        githubUrl: "https://github.com/mahiru7229/mcw-launcher/releases/download/v1.7.0/mcw_core-1.7.0-py3-none-any.whl",
        cdnUrl: "https://mcw-download.pages.dev/releases/v1.7.0/mcw_core-1.7.0-py3-none-any.whl",
      }
    }
  },
  changelog: [
    {
      type: "feat",
      title_vi: "Hệ thống Hotfix CDN Edge thời gian thực",
      title_en: "Live Edge CDN Hotfix Distribution System",
      desc_vi: "Cơ chế cập nhật vi mô tải bản vá khẩn cấp siêu nhẹ chỉ vài KB từ Cloudflare Edge PoP (Hồng Kông & Singapore), xác thực chữ ký SHA-256 và hoán đổi atomic.",
      desc_en: "Micro-patch distribution delivering lightweight hotfixes directly from Cloudflare Edge PoPs with SHA-256 verification and atomic swap.",
    },
    {
      type: "fix",
      title_vi: "Hoàn thiện nút làm mới Modloader & biểu tượng tải",
      title_en: "Modloader Refresh Button & Loading Indicators",
      desc_vi: "Bổ sung nhãn chữ trực quan và biểu tượng tải lại khi chọn danh sách phiên bản modloader trong hộp thoại Tạo Instance, kèm cơ chế thử lại mạng tự động.",
      desc_en: "Added localized label and standard reload icon in Create Instance modloader selector, backed by automatic exponential retry logic.",
    },
    {
      type: "perf",
      title_vi: "Đóng gói Zip Portable thuần túy cho Windows & Linux",
      title_en: "Clean Standalone Portable Zip for Windows & Linux",
      desc_vi: "Phân phối định dạng zip tiêu chuẩn, bảo vệ tính toàn vẹn của tệp và tối ưu hóa khả năng giải nén chạy ngay mà không cần cài đặt.",
      desc_en: "Standard portable zip distribution ensuring file integrity and immediate plug-and-play execution without installation.",
    }
  ]
};

export const I18N = {
  vi: {
    nav: {
      features: "Tính Năng",
      compatibility: "Tương Thích",
      preview: "Giao Diện",
      benchmarks: "Hiệu Năng",
      faq: "Hỏi Đáp",
      download: "Tải Về",
    },
    hero: {
      badge: "Phiên bản mới nhất: v1.7.0 Stable",
      headline: "Your World. Your Way.",
      subtitle: "A lightweight Minecraft launcher built for your next adventure.",
      desc: "Trình khởi chạy Minecraft mã nguồn mở thế hệ mới với kiến trúc cô lập từng bản chơi, tự động cấp phát Java, hỗ trợ đầy đủ mọi modloader và mạng lưới cập nhật Edge siêu tốc.",
      btn_download: "Tải Ngay v1.7.0",
      btn_explore: "Khám Phá Tính Năng",
      os_support: "Hỗ trợ Windows & Linux x64 • Khởi chạy tức thì không cần cài đặt",
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
      title: "Được thiết kế cho trải nghiệm Minecraft hoàn hảo",
      subtitle: "Giải quyết triệt để những bất tiện cố hữu của các launcher truyền thống với hiệu năng vượt trội.",
      items: [
        {
          id: "lightweight",
          title: "Siêu nhẹ & Khởi động tức thì",
          desc: "Khởi động dưới 1.2 giây và tiêu thụ dưới 65 MB RAM. Không sử dụng nền tảng trình duyệt cồng kềnh, tối đa hóa tài nguyên cho trò chơi.",
        },
        {
          id: "isolation",
          title: "Khoang cách ly Instance độc lập",
          desc: "Mỗi bản chơi lưu trữ trong thư mục riêng biệt với mods, saves, shaders và cấu hình độc lập 100%. Không bao giờ lo xung đột phiên bản.",
        },
        {
          id: "java",
          title: "Tự động quản lý Java Runtimes",
          desc: "Tự động nhận diện phiên bản Minecraft và phân bổ bộ cài OpenJDK (Java 8, 17, 21) chính xác từ Temurin/Zulu. Không cần cài đặt thủ công.",
        },
        {
          id: "modpack",
          title: "Tích hợp Modrinth & CurseForge",
          desc: "Tìm kiếm, duyệt và cài đặt modpack (.mrpack, CurseForge ZIP) hoặc mod lẻ chỉ với một cú nhấp chuột kèm kiểm tra xung đột thư viện.",
        },
        {
          id: "hotfix",
          title: "Bản vá vi mô Hotfix CDN Edge",
          desc: "Nhận các bản cập nhật khẩn cấp siêu nhỏ chỉ vài KB từ Cloudflare Edge (Hồng Kông & Singapore), xác thực SHA-256 nghiêm ngặt.",
        },
        {
          id: "auth",
          title: "Xác thực Microsoft an toàn",
          desc: "Đăng nhập chính thức qua Microsoft OAuth tiêu chuẩn, mã hóa thông tin xác thực an toàn trên hệ điều hành và hỗ trợ chơi LAN offline mượt mà.",
        },
      ]
    },
    compatibility: {
      tag: "Hệ sinh thái",
      title: "One launcher. Infinite worlds.",
      subtitle: "Hỗ trợ đầy đủ mọi nền tảng modding và phiên bản Minecraft từ cổ điển đến hiện đại nhất.",
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
          desc: "Nền tảng siêu nhẹ, tương thích hoàn hảo với Sodium, Iris Shaders và hệ sinh thái mod hiện đại.",
          accent: "#72D8FF",
        },
        {
          name: "Forge",
          tag: "Kinh điển",
          version: "1.7.10 → 1.20.1+",
          desc: "Cộng đồng mod đồ sộ bậc nhất với hàng chục nghìn modpack kỹ thuật, phép thuật và phiêu lưu phức tạp.",
          accent: "#FCD34D",
        },
        {
          name: "NeoForge",
          tag: "Thế hệ mới",
          version: "1.20.4 → 1.21.x+",
          desc: "Sự kế thừa hiện đại của Forge với kiến trúc tối ưu, hỗ trợ đường dẫn dài và hiệu năng vượt bậc.",
          accent: "#F0A7D8",
        },
        {
          name: "Quilt",
          tag: "Linh hoạt",
          version: "Tương thích Fabric",
          desc: "Mở rộng từ Fabric với thư viện API thân thiện cho modder và tương thích ngược hầu hết mod Fabric.",
          accent: "#8B8FF8",
        },
        {
          name: "Modpacks",
          tag: "1-Click Install",
          version: ".mrpack & .zip",
          desc: "Nhập trực tiếp các gói modpack từ Modrinth, CurseForge hoặc chia sẻ tệp ZIP với bạn bè tức thì.",
          accent: "#38BDF8",
        },
      ]
    },
    performance: {
      tag: "Kiểm chứng kỹ thuật",
      title: "Hiệu năng thực tế được đo lường chính xác",
      subtitle: "Không quảng cáo phóng đại. Các chỉ số được benchmark trực tiếp trên môi trường thực tế.",
      metrics: [
        {
          val: "< 1.2s",
          label: "Thời gian khởi động Core",
          desc: "Nhanh hơn gấp 3 lần so với các launcher web-based",
        },
        {
          val: "< 65 MB",
          label: "Bộ nhớ RAM ở trạng thái chờ",
          desc: "Tiết kiệm tối đa RAM để game đạt FPS cao nhất",
        },
        {
          val: "100%",
          label: "Cô lập thư viện & thế giới",
          desc: "Không đè cấu hình, không xung đột file giữa các bản chơi",
        },
        {
          val: "SHA-256",
          label: "Xác thực tính toàn vẹn",
          desc: "Mọi file tải về đều được băm kiểm tra chống hỏng hóc",
        },
      ],
      terminal_title: "MCW Core Command Line & Status",
    },
    download: {
      tag: "Tải về miễn phí",
      title: "Ready to play?",
      subtitle: "Tải ngay MCW Launcher v1.7.0 dưới định dạng tệp ZIP giải nén dùng ngay hoặc tích hợp Core SDK.",
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
      view_changelog: "Xem nhật ký cập nhật v1.7.0",
      changelog_title: "Nhật ký cập nhật v1.7.0 Stable",
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
      benchmarks: "Performance",
      faq: "FAQ",
      download: "Download",
    },
    hero: {
      badge: "Latest Release: v1.7.0 Stable",
      headline: "Your World. Your Way.",
      subtitle: "A lightweight Minecraft launcher built for your next adventure.",
      desc: "A next-generation open source Minecraft launcher featuring complete instance isolation, automatic Java management, native modpack support, and ultra-fast Edge CDN updates.",
      btn_download: "Download v1.7.0",
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
      title: "Built for an Uncompromised Minecraft Experience",
      subtitle: "Solving traditional launcher pain points with superior architecture and unmatched reliability.",
      items: [
        {
          id: "lightweight",
          title: "Fast & Lightweight",
          desc: "Cold start in under 1.2s and idle RAM usage under 65 MB. No bloated web wrappers, reserving full system power for your gameplay.",
        },
        {
          id: "isolation",
          title: "Multiple Isolated Instances",
          desc: "Every profile lives in its own sandboxed folder with separate mods, configs, saves, and shaders. Zero version collisions.",
        },
        {
          id: "java",
          title: "Automatic Java Runtimes",
          desc: "Auto-detects Minecraft requirements and seamlessly provisions the correct OpenJDK (Java 8, 17, 21) from Temurin/Zulu.",
        },
        {
          id: "modpack",
          title: "Modrinth & CurseForge Native",
          desc: "Search, inspect, and install modpacks (.mrpack, CurseForge ZIP) and individual mods in a single click with dependency resolution.",
        },
        {
          id: "hotfix",
          title: "Fail-Closed Hotfix CDN",
          desc: "Instant micro-patches distributed from Cloudflare Edge PoPs (Hong Kong & Singapore) with strict SHA-256 verification and atomic swap.",
        },
        {
          id: "auth",
          title: "Secure Microsoft OAuth",
          desc: "Official Microsoft OAuth login storing credentials securely using system keyrings, plus seamless instant offline/LAN mode.",
        },
      ]
    },
    compatibility: {
      tag: "Ecosystem",
      title: "One launcher. Infinite worlds.",
      subtitle: "Comprehensive compatibility across all modding platforms and Minecraft versions.",
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
          desc: "Ultra-fast modloader optimized for high performance with Sodium, Iris Shaders, and modern mods.",
          accent: "#72D8FF",
        },
        {
          name: "Forge",
          tag: "Classic",
          version: "1.7.10 → 1.20.1+",
          desc: "The largest modding library supporting thousands of legendary tech, magic, and adventure modpacks.",
          accent: "#FCD34D",
        },
        {
          name: "NeoForge",
          tag: "Next-Gen",
          version: "1.20.4 → 1.21.x+",
          desc: "The modern successor to Forge with long-path support, clean APIs, and optimized runtime performance.",
          accent: "#F0A7D8",
        },
        {
          name: "Quilt",
          tag: "Flexible",
          version: "Fabric Compatible",
          desc: "Modular expansion of Fabric offering richer modder APIs and backwards compatibility with Fabric mods.",
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
      tag: "Technical Benchmarks",
      title: "Real Metrics, Strictly Verified",
      subtitle: "No inflated marketing claims. Authentic data measured directly on real test rigs.",
      metrics: [
        {
          val: "< 1.2s",
          label: "Core Cold Startup",
          desc: "3x faster than heavy Electron wrappers",
        },
        {
          val: "< 65 MB",
          label: "Idle Memory Footprint",
          desc: "Minimal resource usage for maximum game FPS",
        },
        {
          val: "100%",
          label: "Folder & Config Isolation",
          desc: "Zero file collisions between independent instances",
        },
        {
          val: "SHA-256",
          label: "End-to-End Cryptography",
          desc: "Every asset and patch verified against corruption",
        },
      ],
      terminal_title: "MCW Core Command Line & Status",
    },
    download: {
      tag: "Free Download",
      title: "Ready to play?",
      subtitle: "Download MCW Launcher v1.7.0 as a standalone portable ZIP or integrate the Core Python SDK.",
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
      view_changelog: "View v1.7.0 Changelog",
      changelog_title: "Release Changelog — v1.7.0 Stable",
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
