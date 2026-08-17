(() => {
  const body = document.body;
  const nav = document.querySelector('[data-nav]');
  const navToggle = document.querySelector('[data-nav-toggle]');
  const themeToggle = document.querySelector('[data-theme-toggle]');

  const storedTheme = localStorage.getItem('lihong-theme');
  if (storedTheme === 'dark') body.classList.add('dark');

  if (window.lucide) window.lucide.createIcons();

  navToggle?.addEventListener('click', () => {
    const open = nav.classList.toggle('is-open');
    navToggle.setAttribute('aria-expanded', String(open));
    navToggle.innerHTML = `<i data-lucide="${open ? 'x' : 'menu'}"></i>`;
    window.lucide?.createIcons();
  });

  nav?.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
    nav.classList.remove('is-open');
    navToggle?.setAttribute('aria-expanded', 'false');
    if (navToggle) navToggle.innerHTML = '<i data-lucide="menu"></i>';
    window.lucide?.createIcons();
  }));

  themeToggle?.addEventListener('click', () => {
    const dark = body.classList.toggle('dark');
    localStorage.setItem('lihong-theme', dark ? 'dark' : 'light');
    themeToggle.innerHTML = `<i data-lucide="${dark ? 'moon' : 'sun'}"></i>`;
    themeToggle.setAttribute('aria-label', dark ? '切换浅色主题' : '切换深色主题');
    window.lucide?.createIcons();
  });

  const certificates = {
    honors: [
      ['2024', '优秀共青团员', 'assets/awards/honors/2024-5优秀团员.jpg'],
      ['2024', '优秀学生干部', 'assets/awards/honors/2024-10-优秀学生干部.jpg'],
      ['2024', '学生组织明星部长', 'assets/awards/honors/2024-11明星部长.jpg'],
      ['2024', '计算机科学与技术学院三好学生', 'assets/awards/honors/2024-11院级三好学生.jpg'],
      ['2024', '优秀志愿服务项目二等奖', 'assets/awards/honors/2024.12 优秀志愿服务项目二等奖（2）.jpg'],
      ['2025', '攀拓计算机能力测评证书', 'assets/awards/honors/@2025.3.8 攀拓计算机能力测评证书.pdf'],
      ['2025', '寒假社会实践活动三等奖', 'assets/awards/honors/2025.4.3 寒假社会实践三等奖.jpg'],
      ['2025', '十佳优秀志愿服务团队', 'assets/awards/honors/2025.5 十佳优秀志愿服务团队.jpg'],
      ['2025', '校级优秀团学干部', 'assets/awards/honors/2025.5 校级优秀团学干部.jpg'],
      ['2025', '“书香之韵，易起来诵”比赛优秀奖', 'assets/awards/honors/2025.5.17 “书香之韵，易起来诵”比赛优秀奖.png'],
      ['2025', '青年志愿者实践部聘书', 'assets/awards/honors/2025.6 青志实践部聘书.jpg'],
      ['2025', '计算机科学与技术学院三好学生', 'assets/awards/honors/2025-10 院级三好学生.jpg'],
      ['2025', '西南科技大学优秀学生干部', 'assets/awards/honors/2025-10校优秀学生干部.jpg'],
      ['2025', '西南科技大学道德风尚奖', 'assets/awards/honors/2025-10校道德风尚奖.jpg'],
      ['2025', '社会实践先进个人', 'assets/awards/honors/2025-10社会实践先进个人.jpg'],
      ['2025', '科技创新奖', 'assets/awards/honors/2025-10科技创新奖.jpg'],
      ['2025', '艺术特长奖', 'assets/awards/honors/2025-10艺术特长奖.jpg'],
      ['2023-2024', '国家励志奖学金（2023-2024 学年）', 'assets/awards/Certificate/honors/2023-2024-national-encouragement-scholarship.jpeg'],
      ['2024-2025', '国家励志奖学金（2024-2025 学年）', 'assets/awards/Certificate/honors/2024-2025-national-encouragement-scholarship.jpeg'],
      ['2025', '四川省大学生综合素质 A 级证书', 'assets/awards/Certificate/honors/2025-sichuan-comprehensive-quality-a-certificate.jpeg'],
      ['2026', '西南科技大学大数据可视化拔尖人才班成员证明', 'assets/awards/Certificate/honors/2026-big-data-visualization-talent-class-member.png'],
      ['2026', '社会实践活动优胜奖', 'assets/awards/honors/2026.6.1 社会实践 优胜奖.jpg'],
      ['2025', '计算机程序设计能力考试乙级 92 分成绩证明', 'assets/awards/Certificate/honors/2025-programming-ability-test-level-b-score-92.png'],
      ['2025', '优秀学生干部', 'assets/awards/honors/优秀学生干部.png'],
      ['2025', '优秀视频奖', 'assets/awards/honors/优秀视频奖.jpg'],
      ['2025', '全国大学英语六级考试成绩证明', 'assets/awards/honors/六级.png'],
      ['2025', '全国大学英语四级考试成绩证明', 'assets/awards/honors/四级.png'],
      ['2025', '班导生任职聘书', 'assets/awards/honors/导生任职.jpg'],
      ['2025', '暑期社会实践活动一等奖', 'assets/awards/honors/社会实践一等奖.jpg'],
      ['2025', '社会实践活动三等奖', 'assets/awards/honors/社会实践三等奖.jpg'],
      ['2025', '“母校行”社会实践活动三等奖', 'assets/awards/honors/社会实践母校行三等奖.jpg'],
      ['2025', '资助宣传大使', 'assets/awards/honors/资助宣传大使.jpg'],
      ['2025', '华为鸿蒙开发者人才认证证书', 'assets/awards/honors/鸿蒙开发者人才证书.png']
    ],
    competitions: [
      ['2024', '第十二届全国大学生数字媒体科技作品及创意竞赛四川省赛区三等奖', 'assets/awards/competitions/2024-11数字媒体省三.jpg'],
      ['2024', '第一届中国计算机学会算法能力大赛四川省三等奖', 'assets/awards/competitions/2024-12-31CACC省三.jpg'],
      ['2025', '第七届全球校园人工智能算法精英大赛产业命题赛道算法巅峰赛全国总决赛二等奖', 'assets/awards/competitions/2025-12校园人工智能算法精英大赛国二.jpg'],
      ['2025', '第十六届蓝桥杯全国软件和信息技术专业人才大赛四川赛区 C/C++ 程序设计大学 B 组二等奖', 'assets/awards/competitions/2025-5-26蓝桥杯省二.jpg'],
      ['2025', '睿抗机器人开发者大赛四川省三等奖', 'assets/awards/competitions/2025-7睿抗省三.jpg'],
      ['2025', '全国大学生统计建模大赛四川赛区一等奖', 'assets/awards/competitions/2025-8统计建模省一.jpg'],
      ['2026', '第十九届中国大学生计算机设计大赛三等奖', 'assets/awards/competitions/2025.8华迪杯.jpg'],
      ['2026', '“正大杯”全国大学生市场调查与分析大赛四川省二等奖', 'assets/awards/competitions/2026-4正大杯省二.png'],
      ['2026', '第十九届中国大学生计算机设计大赛四川省赛区一等奖', 'assets/awards/competitions/2026-5华迪杯省一.png'],
      ['2025', '攀拓认证等级奖三等奖', 'assets/awards/competitions/@2025.3.8 攀拓认证等级奖证书_三等奖.pdf'],
      ['2025', 'iCAN 大学生创新创业大赛三等奖', 'assets/awards/competitions/ican三等奖.png'],
      ['2025', '精准专项项目结题证书', 'assets/awards/competitions/精准专项结题证书.jpg'],
      ['2025', '全国大学生统计建模大赛全国三等奖', 'assets/awards/competitions/统计建模国三.jpg']
    ]
  };

  const certificateModal = document.querySelector('[data-certificate-modal]');
  const certificateModalContent = document.querySelector('[data-certificate-modal-content]');
  const certificateModalTitle = document.querySelector('[data-certificate-modal-title]');
  const certificateModalClose = document.querySelector('[data-certificate-modal-close]');

  const showCertificate = (title, source) => {
    if (!certificateModal || !certificateModalContent || !certificateModalTitle) return;
    const isPdf = source.toLowerCase().endsWith('.pdf');
    certificateModalContent.replaceChildren();
    const media = document.createElement(isPdf ? 'iframe' : 'img');
    if (isPdf) {
      media.src = source;
      media.title = title;
    } else {
      media.src = source;
      media.alt = title;
    }
    certificateModalContent.append(media);
    certificateModalTitle.textContent = title;
    certificateModal.showModal();
  };

  document.querySelectorAll('[data-certificate-gallery]').forEach((gallery) => {
    const category = gallery.dataset.certificateGallery;
    const fragment = document.createDocumentFragment();
    (certificates[category] || []).forEach(([year, title, source]) => {
      const card = document.createElement('button');
      const isPdf = source.toLowerCase().endsWith('.pdf');
      card.type = 'button';
      card.className = 'certificate-card';
      card.setAttribute('aria-label', `查看${title}`);
      const media = document.createElement('span');
      media.className = 'certificate-card-media';
      if (isPdf) {
        media.classList.add('certificate-card-pdf');
        const icon = document.createElement('i');
        icon.setAttribute('data-lucide', 'file-text');
        icon.setAttribute('aria-hidden', 'true');
        media.append(icon);
      } else {
        const image = document.createElement('img');
        const previewSource = source
          .replace('assets/awards/', 'assets/awards/thumbnails/')
          .replace(/\.(?:jpe?g|png)$/i, '.jpg');
        image.src = encodeURI(previewSource);
        image.alt = title;
        // Use compact previews in the carousel; the click action still opens the original file.
        image.loading = 'eager';
        image.decoding = 'async';
        image.addEventListener('error', () => {
          if (!image.dataset.usedOriginal) {
            image.dataset.usedOriginal = 'true';
            image.src = encodeURI(source);
            return;
          }
          media.classList.add('is-unavailable');
          media.replaceChildren();
          const icon = document.createElement('i');
          icon.setAttribute('data-lucide', 'image-off');
          icon.setAttribute('aria-hidden', 'true');
          const text = document.createElement('span');
          text.textContent = '图片暂时无法加载';
          media.append(icon, text);
          window.lucide?.createIcons();
        });
        media.append(image);
      }
      const type = document.createElement('span');
      type.className = 'certificate-card-type';
      type.textContent = isPdf ? 'PDF' : year;
      media.append(type);

      const copy = document.createElement('span');
      copy.className = 'certificate-card-copy';
      const heading = document.createElement('strong');
      heading.textContent = title;
      const description = document.createElement('span');
      description.textContent = `${year} 年证书材料`;
      copy.append(heading, description);
      card.append(media, copy);
      card.addEventListener('click', () => showCertificate(title, source));
      fragment.append(card);
    });
    gallery.append(fragment);
  });

  document.querySelectorAll('[data-certificate-carousel]').forEach((carousel) => {
    const track = carousel.querySelector('[data-certificate-gallery]');
    const shift = (direction) => {
      if (!track) return;
      track.scrollBy({ left: direction * Math.max(track.clientWidth * 0.82, 280), behavior: 'smooth' });
    };
    carousel.querySelector('[data-certificate-previous]')?.addEventListener('click', () => shift(-1));
    carousel.querySelector('[data-certificate-next]')?.addEventListener('click', () => shift(1));
  });

  certificateModalClose?.addEventListener('click', () => certificateModal?.close());
  certificateModal?.addEventListener('click', (event) => {
    if (event.target === certificateModal) certificateModal.close();
  });

  document.querySelectorAll('[data-media-carousel]').forEach((carousel) => {
    const slides = Array.from(carousel.querySelectorAll('.media-slide'));
    const page = carousel.querySelector('[data-media-page]');
    let current = 0;
    const update = (next) => {
      current = (next + slides.length) % slides.length;
      slides.forEach((slide, index) => slide.classList.toggle('is-active', index === current));
      if (page) page.textContent = `${current + 1} / ${slides.length}`;
    };
    carousel.querySelector('[data-media-previous]')?.addEventListener('click', () => update(current - 1));
    carousel.querySelector('[data-media-next]')?.addEventListener('click', () => update(current + 1));
  });

  document.querySelectorAll('[data-patent-carousel]').forEach((carousel) => {
    const slides = Array.from(carousel.querySelectorAll('.patent-slide'));
    const page = carousel.querySelector('[data-patent-page]');
    let current = 0;
    const update = (next) => {
      current = (next + slides.length) % slides.length;
      slides.forEach((slide, index) => slide.classList.toggle('is-active', index === current));
      if (page) page.textContent = `${current + 1} / ${slides.length}`;
    };
    carousel.querySelector('[data-patent-previous]')?.addEventListener('click', () => update(current - 1));
    carousel.querySelector('[data-patent-next]')?.addEventListener('click', () => update(current + 1));
  });

  if (window.lucide) window.lucide.createIcons();

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));

  const year = document.querySelector('[data-year]');
  if (year) year.textContent = new Date().getFullYear();
})();
