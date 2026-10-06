import type { Content } from './en'
import { RATES } from '../utils/my-rates'

const ms: Content = {
  lang: 'ms',
  locale: 'ms-MY',
  site: {
    name: 'Hidayat Utility',
    tagline: 'Kalkulator, penukar & alat dalam talian percuma',
    description: 'Kalkulator dan penukar dalam talian yang percuma dan pantas: umur, peratusan, penukaran unit, BMI dan pengiraan tarikh. Tanpa pendaftaran, dan nombor anda kekal pada peranti anda.'
  },
  nav: {
    skip: 'Langkau ke kandungan utama',
    main: 'Utama',
    home: 'Laman utama Hidayat Utility',
    tools: 'Alat',
    about: 'Tentang',
    theme: 'Tukar mod gelap',
    language: 'Bahasa',
    breadcrumb: 'Jejak navigasi',
    homeCrumb: 'Utama'
  },
  footer: {
    blurb: 'Kalkulator dan penukar percuma yang berjalan dalam pelayar anda.',
    explore: 'Terokai',
    legal: 'Laman',
    contact: 'Hubungi',
    privacy: 'Dasar Privasi',
    terms: 'Terma Penggunaan',
    rights: 'Hak cipta terpelihara.'
  },
  common: {
    result: 'Keputusan',
    howItWorks: 'Cara ia berfungsi',
    examples: 'Contoh',
    faq: 'Soalan lazim',
    related: 'Alat berkaitan',
    openTool: 'Buka alat',
    browseAll: 'Lihat semua alat',
    clear: 'Kosongkan'
  },
  categories: {
    datetime: { name: 'Tarikh & masa', description: 'Kira umur, jarak antara tarikh serta tarikh akan datang atau lampau.' },
    math: { name: 'Matematik', description: 'Peratusan tanpa perlu mengira dalam kepala.' },
    converters: { name: 'Penukar', description: 'Tukar antara unit panjang, berat dan suhu.' },
    health: { name: 'Kesihatan', description: 'Kalkulator saringan am.' },
    finance: { name: 'Kewangan', description: 'Anggarkan bayaran balik pinjaman dalam ringgit.' },
    developer: { name: 'Pembangun & web', description: 'Format JSON, jana UUID dan kod QR.' }
  },
  home: {
    metaTitle: 'Kalkulator, Penukar & Alat Dalam Talian Percuma | Hidayat Utility',
    h1: 'Kalkulator, penukar & alat dalam talian percuma',
    intro: 'Alat mudah untuk soalan harian: berapa umur saya, berapa 15% daripada jumlah ini, berapa hari lagi sebelum tarikh tertentu. Semuanya berjalan dalam pelayar anda, jadi tiada pendaftaran dan tiada apa yang dimuat naik.',
    toolsHeading: 'Pilih alat',
    whyHeading: 'Mengapa guna Hidayat Utility',
    why: [
      { title: 'Privasi terjamin', text: 'Pengiraan dibuat pada peranti anda. Input anda tidak pernah dihantar ke pelayan.' },
      { title: 'Jawapan yang jelas', text: 'Setiap alat menerangkan kaedahnya, menunjukkan contoh dan menjawab soalan lazim.' },
      { title: 'Pantas dan mudah diakses', text: 'Halaman ringan yang boleh digunakan dengan papan kekunci, pembaca skrin, serta mod cerah atau gelap.' }
    ]
  },
  toolsIndex: {
    metaTitle: 'Semua Kalkulator & Penukar | Hidayat Utility',
    metaDescription: 'Lihat semua kalkulator dan penukar di Hidayat Utility: umur, peratusan, penukaran unit, BMI dan pengiraan tarikh.',
    h1: 'Semua alat',
    intro: 'Semua kalkulator dan penukar di laman ini, dikelompokkan mengikut topik. Lebih banyak alat akan ditambah dari semasa ke semasa.'
  },
  notFound: {
    title: 'Halaman tidak dijumpai',
    text: 'Halaman yang anda cari tidak wujud atau telah dialihkan.',
    cta: 'Pergi ke laman utama'
  },
  pages: {
    about: {
      metaTitle: 'Tentang Hidayat Utility',
      metaDescription: 'Mengapa Hidayat Utility wujud: koleksi kecil kalkulator dan penukar dalam talian yang percuma, peribadi dan mudah digunakan.',
      h1: 'Tentang Hidayat Utility',
      sections: [
        { h: 'Tentang laman ini', p: ['Hidayat Utility ialah koleksi kecil kalkulator dan penukar dalam talian untuk soalan harian. Setiap alat melakukan satu tugas, menerangkan cara ia berfungsi, dan berjalan sepenuhnya dalam pelayar anda.'] },
        { h: 'Cara kami bekerja', p: ['Kami lebih mengutamakan beberapa alat yang dibina dengan baik berbanding banyak alat yang cetek. Setiap alat menangani input yang salah dengan baik, dan matematik di sebaliknya diterangkan pada halaman supaya anda boleh menyemaknya sendiri.', 'Keputusan adalah untuk maklumat am. Untuk keputusan perubatan, kewangan atau undang-undang, sila rujuk pakar yang bertauliah.'] },
        { h: 'Bahasa', p: ['Laman ini tersedia dalam Bahasa Melayu dan English. Anda boleh menukar bahasa dari pengepala pada bila-bila masa.'] }
      ]
    },
    contact: {
      metaTitle: 'Hubungi | Hidayat Utility',
      metaDescription: 'Cara menghubungi Hidayat Utility untuk maklum balas, pembetulan atau cadangan alat.',
      h1: 'Hubungi',
      intro: 'Jumpa kesilapan, atau ada alat yang anda mahu kami sediakan? Kami ingin mendengar daripada anda.',
      emailLabel: 'E-mel kami di',
      noEmail: 'Alamat hubungan akan diterbitkan di sini tidak lama lagi.',
      note: 'Kami membaca setiap mesej tetapi mungkin tidak dapat membalas semuanya.'
    },
    privacy: {
      metaTitle: 'Dasar Privasi | Hidayat Utility',
      metaDescription: 'Data yang dikumpul dan tidak dikumpul oleh Hidayat Utility. Input kalkulator kekal pada peranti anda.',
      h1: 'Dasar Privasi',
      updated: 'Dikemas kini: Oktober 2026',
      sections: [
        { h: 'Input kalkulator anda', p: ['Semua pengiraan berjalan dalam pelayar anda. Tarikh, nombor dan ukuran yang anda masukkan tidak dihantar ke pelayan kami dan tidak disimpan.'] },
        { h: 'Apa yang disimpan pada peranti anda', p: ['Jika anda memilih tema cerah atau gelap, pilihan itu disimpan dalam storan setempat pelayar anda supaya diingati pada kali berikutnya. Ia kekal pada peranti anda dan tidak dihantar kepada kami.'] },
        { h: 'Analitik, kuki dan pengiklanan', p: ['Pada masa penulisan, laman ini tidak menggunakan analitik, kuki penjejakan atau pengiklanan. Jika ini berubah, contohnya jika iklan ditambah untuk menyokong laman, dasar ini akan dikemas kini terlebih dahulu dan, jika diperlukan, persetujuan anda akan diminta.'] },
        { h: 'Pengehosan', p: ['Laman ini dihantar sebagai fail statik oleh penyedia pengehosan. Seperti mana-mana hos web, ia mungkin menyimpan log pelayan biasa seperti alamat IP dan halaman yang diminta untuk keselamatan dan operasi.'] },
        { h: 'Hubungi', p: ['Soalan tentang dasar ini boleh dihantar melalui halaman hubungi.'] }
      ]
    },
    terms: {
      metaTitle: 'Terma Penggunaan | Hidayat Utility',
      metaDescription: 'Terma untuk menggunakan kalkulator dan penukar percuma di Hidayat Utility.',
      h1: 'Terma Penggunaan',
      updated: 'Dikemas kini: Oktober 2026',
      sections: [
        { h: 'Penggunaan laman', p: ['Hidayat Utility percuma digunakan untuk tujuan peribadi dan komersial. Sila jangan menyalahgunakan laman ini atau cuba mengganggunya.'] },
        { h: 'Maklumat sahaja', p: ['Alat-alat ini memberikan maklumat am dan anggaran. Ia bukan nasihat perubatan, kewangan, undang-undang atau profesional lain. Sentiasa sahkan keputusan penting secara bebas dan rujuk pakar bertauliah jika perlu.'] },
        { h: 'Tiada jaminan', p: ['Kami berusaha memastikan pengiraan tepat, tetapi laman ini disediakan “seadanya” tanpa sebarang jaminan. Setakat yang dibenarkan undang-undang, kami tidak bertanggungjawab atas kerugian yang timbul daripada penggunaan, atau ketidakupayaan menggunakan, laman ini.'] },
        { h: 'Perubahan', p: ['Kami mungkin mengubah alat atau terma ini dari semasa ke semasa. Penggunaan berterusan bermakna anda menerima terma yang dikemas kini.'] }
      ]
    }
  },
  tools: {
    'stamp-duty-calculator': {
      name: 'Kalkulator Duti Setem (Malaysia)',
      short: 'Duti setem pindah milik hartanah dan perjanjian pinjaman dalam RM.',
      metaTitle: 'Kalkulator Duti Setem Malaysia: MOT Hartanah & Pinjaman',
      metaDescription: 'Kira duti setem Malaysia ke atas pindah milik hartanah (MOT) dan perjanjian pinjaman, termasuk pengecualian rumah pertama. Anggaran percuma dalam ringgit.',
      h1: 'Kalkulator Duti Setem (Malaysia)',
      intro: 'Masukkan harga hartanah dan jumlah pinjaman untuk menganggar duti setem ke atas memorandum pindah milik (MOT) dan perjanjian pinjaman.',
      ui: {
        price: 'Harga hartanah (RM)',
        loan: 'Jumlah pinjaman (RM, pilihan)',
        firstHome: 'Saya layak mendapat pengecualian rumah pertama',
        firstHomeHint: `Untuk hartanah kediaman pertama berharga sehingga RM${RATES.stampDuty.firstHomeLimit.toLocaleString('ms-MY')}, dibeli oleh warganegara Malaysia, dengan perjanjian ditandatangani sebelum ${RATES.stampDuty.firstHomeUntil}. Sahkan syarat dengan LHDN atau peguam anda.`,
        empty: 'Masukkan harga hartanah untuk melihat keputusan.',
        errPrice: 'Harga hartanah mestilah lebih besar daripada sifar.',
        errLoan: 'Jumlah pinjaman tidak boleh negatif atau melebihi harga hartanah.',
        transfer: 'Duti setem pindah milik (MOT)',
        loanDuty: 'Duti setem perjanjian pinjaman',
        total: 'Jumlah duti setem',
        exempt: 'Dikecualikan sepenuhnya di bawah skim rumah pertama.',
        exemptNotApplied: 'Pengecualian rumah pertama hanya terpakai sehingga had harga di atas, jadi kadar biasa dipaparkan.',
        notIncluded: 'Yuran guaman, yuran penilaian dan kos lain tidak dimasukkan.',
        ratesNote: `Kadar disemak pada ${RATES.checked}. Peraturan duti setem berubah mengikut Belanjawan, jadi sahkan dengan LHDN sebelum bergantung pada angka ini.`
      },
      how: [
        'Duti pindah milik adalah progresif: 1% untuk RM100,000 pertama, 2% untuk RM400,000 berikutnya, 3% untuk RM500,000 berikutnya dan 4% untuk apa-apa melebihi RM1 juta. Duti dikenakan bagi setiap RM100 atau sebahagiannya, jadi harga dibundarkan ke atas kepada RM100 seterusnya.',
        'Duti perjanjian pinjaman ialah 0.5% tetap daripada jumlah pinjaman. Pengecualian rumah pertama menghapuskan kedua-dua duti bagi pembelian yang layak.'
      ],
      examples: [
        { title: 'Hartanah RM600,000 dengan pinjaman RM540,000', text: 'Duti pindah milik ialah RM12,000 (RM1,000 + RM8,000 + RM3,000) dan duti pinjaman ialah RM2,700, jumlahnya RM14,700.' },
        { title: 'Rumah pertama RM450,000', text: 'RM0, jika anda memenuhi syarat pengecualian rumah pertama.' }
      ],
      faq: [
        { q: 'Adakah ini terpakai untuk pembeli asing?', a: 'Tidak. Peraturan dan kadar yang berbeza mungkin terpakai kepada bukan warganegara, jadi tanya peguam anda.' },
        { q: 'Adakah ini keseluruhan kos membeli hartanah?', a: 'Tidak. Yuran guaman, yuran penilaian dan caj lain adalah tambahan dan tidak dimasukkan di sini.' },
        { q: 'Siapa yang membayar duti setem?', a: 'Pembeli biasanya membayar duti pindah milik dan perjanjian pinjaman, melainkan perjanjian jual beli menyatakan sebaliknya.' }
      ]
    },
    'zakat-calculator': {
      name: 'Kalkulator Zakat (Malaysia)',
      short: 'Anggarkan zakat ke atas pendapatan, simpanan atau emas.',
      metaTitle: 'Kalkulator Zakat Malaysia: Pendapatan, Simpanan & Emas',
      metaDescription: 'Kalkulator zakat percuma untuk pendapatan, simpanan dan emas dalam ringgit. Menyemak nisab (85 g emas) dan mengira 2.5% yang perlu dibayar. Anggaran sahaja.',
      h1: 'Kalkulator Zakat (Malaysia)',
      intro: 'Pilih pendapatan, simpanan atau emas, masukkan jumlah dan harga emas hari ini, dan lihat sama ada ia mencapai nisab dan berapa zakat yang perlu dibayar.',
      ui: {
        type: 'Jenis zakat',
        types: { income: 'Pendapatan', savings: 'Simpanan', gold: 'Emas' },
        income: 'Pendapatan tahunan selepas tolakan (RM)',
        savings: 'Jumlah simpanan yang disimpan setahun penuh (RM)',
        goldGrams: 'Berat emas (gram)',
        goldPrice: 'Harga emas segram (RM)',
        goldPriceHint: 'Gunakan harga hari ini daripada pihak berkuasa zakat negeri anda atau pedagang emas.',
        empty: 'Masukkan jumlah dan harga emas untuk melihat keputusan.',
        errGold: 'Masukkan harga emas yang lebih besar daripada sifar.',
        errAmount: 'Jumlah tidak boleh negatif.',
        nisab: 'Nisab (85 g emas)',
        amount: 'Jumlah yang dinilai',
        below: 'Di bawah nisab, jadi tiada zakat wajib atas jumlah ini.',
        due: 'Zakat yang perlu dibayar (2.5%)',
        note: 'Peraturan tolakan, perhiasan yang dipakai dan bila zakat wajib berbeza antara negeri. Sila sahkan dengan pihak berkuasa zakat negeri anda. Ini anggaran, bukan fatwa.'
      },
      how: [
        'Zakat ialah 2.5% daripada jumlah yang dinilai, apabila jumlah itu mencapai nisab. Nisab yang digunakan di sini ialah nilai 85 gram emas pada harga yang anda masukkan.',
        'Untuk pendapatan, masukkan pendapatan tahunan anda selepas tolakan yang dibenarkan negeri anda. Untuk simpanan, masukkan jumlah yang anda simpan setahun qamariah penuh. Untuk emas, berat didarab dengan harga emas.'
      ],
      examples: [{ title: 'Pendapatan RM60,000 dengan harga emas RM400 segram', text: 'Nisab ialah 85 × RM400 = RM34,000. RM60,000 melebihinya, jadi zakat ialah 2.5% = RM1,500.' }],
      faq: [
        { q: 'Mengapa saya perlu memasukkan harga emas?', a: 'Nisab ditakrifkan sebagai 85 gram emas, jadi nilainya dalam ringgit berubah mengikut harga emas.' },
        { q: 'Tolakan mana yang boleh saya tolak daripada pendapatan?', a: 'Ini bergantung pada pihak berkuasa zakat negeri anda, jadi semak dengan mereka sebelum memasukkan angka.' },
        { q: 'Adakah ini menggantikan nasihat pihak berkuasa zakat?', a: 'Tidak. Ia anggaran untuk membantu perancangan. Panduan pihak berkuasa negeri anda yang perlu diikuti.' }
      ]
    },
    'salary-calculator': {
      name: 'Kalkulator Gaji (Malaysia)',
      short: 'Anggarkan gaji bersih selepas KWSP, PERKESO, SIP dan cukai.',
      metaTitle: 'Kalkulator Gaji Malaysia: Gaji Bersih Selepas KWSP & PCB',
      metaDescription: 'Anggarkan gaji bersih bulanan anda di Malaysia selepas KWSP, PERKESO, SIP dan cukai pendapatan PCB. Kalkulator percuma, anggaran sahaja.',
      h1: 'Kalkulator Gaji (Malaysia)',
      intro: 'Masukkan gaji kasar bulanan anda untuk menganggar potongan KWSP, PERKESO, SIP dan cukai pendapatan (PCB) serta gaji bersih anda.',
      ui: {
        gross: 'Gaji kasar bulanan (RM)',
        epfRate: 'Kadar KWSP pekerja',
        epf11: '11% (standard)',
        epf9: '9% (pilihan dikurangkan)',
        empty: 'Masukkan gaji bulanan anda untuk melihat keputusan.',
        errInvalid: 'Masukkan gaji yang lebih besar daripada sifar.',
        errRange: 'Gaji itu kelihatan tidak realistik. Sila semak.',
        net: 'Anggaran gaji bersih sebulan',
        deductions: 'Potongan bulanan',
        epf: 'KWSP (pekerja)',
        socso: 'PERKESO (pekerja)',
        eis: 'SIP (pekerja)',
        pcb: 'Cukai pendapatan (PCB, anggaran)',
        employer: 'KWSP majikan (dibayar tambahan, tidak ditolak daripada anda)',
        note: `Anggaran untuk pekerja di bawah 60 tahun menggunakan kadar yang disemak pada ${RATES.checked}. PERKESO menggunakan anggaran peratusan jadual caruman, dan PCB mengandaikan pekerja bujang tanpa pelepasan lain. Slip gaji anda yang muktamad.`
      },
      how: [
        `KWSP ialah peratusan gaji kasar anda. PERKESO dan SIP ialah peratusan gaji anda sehingga had siling RM${RATES.payroll.wageCeiling.toLocaleString('ms-MY')}.`,
        `PCB dianggarkan dengan memproyeksikan pendapatan tahunan anda, menggunakan pelepasan individu RM${RATES.tax.individualRelief.toLocaleString('ms-MY')} dan pelepasan KWSP anda (sehingga RM${RATES.tax.epfReliefCap.toLocaleString('ms-MY')}), mengira cukai untuk ${RATES.taxYear}, dan membahagikannya dengan 12.`
      ],
      examples: [{ title: 'RM5,000 kasar, KWSP 11%', text: 'KWSP RM550, PERKESO RM25, SIP RM10 dan kira-kira RM110 PCB, meninggalkan lebih kurang RM4,305. Majikan menambah RM650 KWSP.' }],
      faq: [
        { q: 'Mengapa slip gaji saya berbeza?', a: 'Majikan anda mungkin menggunakan jadual PERKESO rasmi, pelepasan TP1 anda, bonus, elaun atau pasangan dan anak, yang semuanya mengubah angka.' },
        { q: 'Adakah KWSP majikan ditolak daripada gaji saya?', a: 'Tidak. Ia dibayar oleh majikan anda tambahan kepada gaji dan dipaparkan sebagai maklumat.' },
        { q: 'Adakah ini termasuk bonus?', a: 'Tidak. Ia menganggap gaji sama setiap bulan.' }
      ]
    },
    'income-tax-calculator': {
      name: 'Kalkulator Cukai Pendapatan (Malaysia)',
      short: 'Anggarkan cukai pendapatan individu pemastautin mengikut tahun taksiran.',
      metaTitle: `Kalkulator Cukai Pendapatan Malaysia TT ${RATES.taxYear}`,
      metaDescription: `Anggarkan cukai pendapatan individu pemastautin Malaysia untuk TT ${RATES.taxYear}. Masukkan pendapatan, pelepasan dan zakat untuk melihat pendapatan bercukai, cukai mengikut kadar dan cukai yang perlu dibayar.`,
      h1: `Kalkulator Cukai Pendapatan (Malaysia, TT ${RATES.taxYear})`,
      intro: `Anggarkan cukai pendapatan pemastautin cukai Malaysia untuk tahun taksiran ${RATES.taxYear}, dengan pecahan mengikut kadar cukai.`,
      ui: {
        income: 'Pendapatan boleh dikenakan cukai tahunan (RM)',
        incomeHint: 'Jumlah pendapatan tahunan anda yang boleh dikenakan cukai sebelum pelepasan.',
        reliefs: 'Pelepasan dan tolakan lain (RM)',
        reliefsHint: `Pelepasan yang anda tuntut selain pelepasan individu automatik RM${RATES.tax.individualRelief.toLocaleString('ms-MY')}, seperti KWSP, insurans hayat, gaya hidup atau anak.`,
        zakat: 'Zakat yang dibayar (RM)',
        empty: 'Masukkan pendapatan tahunan anda untuk melihat keputusan.',
        errIncome: 'Pendapatan tidak boleh negatif.',
        errNegative: 'Pelepasan dan zakat tidak boleh negatif.',
        chargeable: 'Pendapatan bercukai',
        before: 'Cukai sebelum rebat',
        rebate: 'Rebat',
        zakatOffset: 'Tolakan zakat',
        payable: 'Cukai yang perlu dibayar',
        effective: 'Kadar efektif',
        bandsTitle: 'Cukai mengikut kadar',
        bandRange: (from: string, to: string | null) => (to ? `RM${from} hingga RM${to}` : `Melebihi RM${from}`),
        ratesNote: `Kadar individu pemastautin untuk TT ${RATES.taxYear}, disemak pada ${RATES.checked}. Pelepasan, rebat dan kadar berubah, jadi semak LHDN sebelum memfailkan. Ini anggaran, bukan nasihat cukai.`
      },
      how: [
        `Pendapatan bercukai ialah pendapatan anda tolak pelepasan individu RM${RATES.tax.individualRelief.toLocaleString('ms-MY')} dan pelepasan lain yang anda masukkan. Cukai kemudian dikenakan mengikut kadar, daripada 0% untuk RM5,000 pertama sehingga 30% melebihi RM2 juta.`,
        `Jika pendapatan bercukai ialah RM${RATES.tax.rebateLimit.toLocaleString('ms-MY')} atau kurang, rebat RM${RATES.tax.rebate} terpakai. Zakat yang dibayar ditolak daripada cukai ringgit demi ringgit, tetapi tidak boleh mengurangkannya di bawah sifar.`
      ],
      examples: [{ title: 'Pendapatan RM100,000 tanpa pelepasan lain', text: 'Pendapatan bercukai ialah RM91,000, menghasilkan cukai RM7,690 (kadar efektif 7.69%).' }],
      faq: [
        { q: 'Pelepasan mana yang perlu saya masukkan?', a: 'Jumlah pelepasan lain yang anda layak, seperti KWSP, insurans hayat, gaya hidup, pasangan, anak dan perubatan. Semak had bagi setiap satu di laman web LHDN.' },
        { q: 'Adakah ini untuk bukan pemastautin?', a: 'Tidak. Bukan pemastautin dikenakan cukai pada kadar tetap yang berbeza.' },
        { q: 'Adakah ia termasuk taksiran bersama?', a: 'Tidak. Ia mengandaikan taksiran berasingan bagi individu bujang.' }
      ]
    },
    'hijri-converter': {
      name: 'Penukar Tarikh Hijrah',
      short: 'Tukar antara tarikh Masihi dan Hijrah.',
      metaTitle: 'Penukar Tarikh Hijrah: Masihi ke Hijrah dan Sebaliknya',
      metaDescription: 'Tukar tarikh Masihi kepada Hijrah dan tarikh Hijrah kepada Masihi. Penukar percuma menggunakan kalendar Umm al-Qura. Malaysia mungkin berbeza sehari.',
      h1: 'Penukar Tarikh Hijrah',
      intro: 'Tukar tarikh Masihi kepada kalendar Hijrah, atau tarikh Hijrah kepada Masihi.',
      ui: {
        mode: 'Tukar',
        toHijri: 'Masihi ke Hijrah',
        toGregorian: 'Hijrah ke Masihi',
        date: 'Tarikh Masihi',
        year: 'Tahun Hijrah',
        month: 'Bulan Hijrah',
        day: 'Hari Hijrah',
        empty: 'Isi tarikh untuk melihat keputusan.',
        errRange: 'Tarikh itu di luar julat yang disokong (Masihi 1900 hingga 2076, Hijrah 1318 hingga 1500).',
        errInvalid: 'Tarikh Hijrah itu tidak wujud. Semak hari, kerana bulan Hijrah ada 29 atau 30 hari.',
        hijriDate: 'Tarikh Hijrah',
        gregorianDate: 'Tarikh Masihi',
        era: 'H',
        months: ['Muharram', 'Safar', 'Rabiulawal', 'Rabiulakhir', 'Jamadilawal', 'Jamadilakhir', 'Rejab', 'Syaaban', 'Ramadan', 'Syawal', 'Zulkaedah', 'Zulhijjah'],
        note: 'Ini menggunakan kalendar Umm al-Qura. Di Malaysia, permulaan setiap bulan disahkan melalui cerapan anak bulan, jadi tarikh boleh berbeza sehari. Untuk tujuan agama, ikut pengumuman rasmi.'
      },
      how: [
        'Jadual kalendar Umm al-Qura terbina dalam pelayar anda digunakan untuk penukaran, jadi tiada data dimuat turun. Untuk menukar daripada Hijrah, alat ini mencari tarikh Masihi yang tarikh Hijrahnya sepadan.',
        'Kalendar Hijrah mempunyai 12 bulan qamariah sebanyak 29 atau 30 hari, jadi tahunnya lebih pendek kira-kira 11 hari berbanding tahun Masihi.'
      ],
      examples: [{ title: '11 Mac 2024', text: 'Ini ialah 1 Ramadan 1445 H dalam kalendar Umm al-Qura.' }],
      faq: [
        { q: 'Mengapa tarikh boleh berbeza daripada kalendar Malaysia?', a: 'Umm al-Qura dikira lebih awal, manakala Malaysia mengesahkan setiap bulan melalui cerapan anak bulan. Kedua-duanya boleh berbeza sehari.' },
        { q: 'Bagaimana saya patut menggunakannya untuk Ramadan atau Hari Raya?', a: 'Gunakan untuk perancangan sahaja, dan ikut pengumuman rasmi untuk hari sebenar.' }
      ]
    },
    'loan-calculator': {
      name: 'Kalkulator Pinjaman (RM)',
      short: 'Anggarkan bayaran bulanan pinjaman rumah, kereta atau peribadi.',
      metaTitle: 'Kalkulator Pinjaman (RM): Anggaran Bayaran Bulanan',
      metaDescription: 'Kalkulator pinjaman percuma dalam ringgit Malaysia. Anggarkan bayaran bulanan, jumlah bayaran dan jumlah faedah dengan baki berkurangan atau kadar rata.',
      h1: 'Kalkulator Pinjaman (RM)',
      intro: 'Masukkan jumlah pinjaman, kadar faedah dan tempoh untuk menganggar bayaran bulanan, jumlah bayaran dan jumlah faedah. Pilih baki berkurangan atau kadar rata mengikut tawaran pinjaman anda.',
      ui: {
        amount: 'Jumlah pinjaman (RM)',
        rate: 'Kadar faedah (% setahun)',
        years: 'Tempoh pinjaman (tahun)',
        type: 'Jenis faedah',
        reducing: 'Baki berkurangan (lazim untuk pinjaman rumah)',
        flat: 'Kadar rata (lazim untuk pinjaman kereta)',
        empty: 'Masukkan jumlah pinjaman, kadar faedah dan tempoh untuk melihat keputusan.',
        errAmount: 'Jumlah pinjaman mestilah lebih besar daripada sifar.',
        errRate: 'Kadar faedah mestilah antara 0 dan 100.',
        errTerm: 'Masukkan tempoh pinjaman antara 0.1 dan 50 tahun.',
        monthly: 'Bayaran bulanan',
        total: 'Jumlah bayaran',
        interest: 'Jumlah faedah',
        flatNote: 'Dengan kadar rata, faedah dikenakan ke atas jumlah asal sepanjang tempoh, jadi kadar baki berkurangan yang setara jauh lebih tinggi daripada angka yang dinyatakan.',
        disclaimer: 'Ini hanya anggaran. Yuran, insurans, cukai dan perubahan kadar tidak dimasukkan. Angka daripada pemberi pinjaman anda yang dikira.'
      },
      how: [
        'Baki berkurangan: faedah dikenakan ke atas jumlah yang masih anda hutang setiap bulan. Bayaran bulanan ialah P × r ÷ (1 − (1 + r)^−n), dengan P ialah jumlah pinjaman, r ialah kadar bulanan (kadar tahunan ÷ 12) dan n ialah bilangan bulan.',
        'Kadar rata: faedah ialah jumlah pinjaman × kadar tahunan × tahun, ditambah kepada jumlah pinjaman dan dibahagi sama rata merentasi semua bulan. Ia tidak menurun semasa anda membayar, sebab itu kadar rata nampak lebih rendah daripada sebenar.',
        'Jumlah bayaran ialah bayaran bulanan darab bilangan bulan, dan jumlah faedah ialah jumlah bayaran tolak jumlah pinjaman.'
      ],
      examples: [
        { title: 'RM300,000 pada 4% selama 30 tahun (baki berkurangan)', text: 'Kira-kira RM1,432.25 sebulan. Sepanjang 360 bulan, jumlah faedah ialah kira-kira RM215,609.' },
        { title: 'RM100,000 pada kadar rata 3% selama 9 tahun', text: 'Faedah ialah 100,000 × 3% × 9 = RM27,000, jadi anda membayar RM127,000 keseluruhannya, kira-kira RM1,175.93 sebulan.' }
      ],
      faq: [
        { q: 'Jenis faedah mana yang patut saya pilih?', a: 'Gunakan jenis yang dinyatakan dalam surat tawaran anda. Pinjaman rumah dan peribadi biasanya menggunakan baki berkurangan, manakala banyak pinjaman kereta menyatakan kadar rata.' },
        { q: 'Adakah keputusan termasuk yuran atau insurans?', a: 'Tidak. Yuran pemprosesan, duti setem, insurans dan sebarang perubahan kadar tidak dimasukkan.' },
        { q: 'Mengapa angka bank saya sedikit berbeza?', a: 'Bank mungkin mengira faedah setiap hari, membundar secara berbeza, atau menggunakan kadar boleh ubah. Anggap ini sebagai anggaran yang hampir.' }
      ]
    },
    'json-formatter': {
      name: 'Pemformat & Pengesah JSON',
      short: 'Format, kecilkan dan sahkan JSON dalam pelayar anda.',
      metaTitle: 'Pemformat & Pengesah JSON: Cantikkan dan Kecilkan',
      metaDescription: 'Pemformat dan pengesah JSON dalam talian percuma. Tampal JSON untuk dicantikkan, dikecilkan atau mencari ralat sintaks. Berjalan dalam pelayar anda; data anda tidak dimuat naik.',
      h1: 'Pemformat & Pengesah JSON',
      intro: 'Tampal JSON untuk menyemak sama ada ia sah, kemudian cantikkan atau kecilkan. Semuanya berlaku dalam pelayar anda, jadi data anda tidak dimuat naik.',
      ui: {
        input: 'Input JSON',
        output: 'Output',
        outputLabel: 'JSON yang diformat',
        indent2: 'Cantikkan (2 ruang)',
        indent4: 'Cantikkan (4 ruang)',
        minify: 'Kecilkan',
        copy: 'Salin',
        copied: 'Disalin ke papan klip.',
        copyFailed: 'Tidak dapat menyalin. Pilih teks dan salin secara manual.',
        clear: 'Kosongkan',
        empty: 'Tampal JSON untuk memformatnya.',
        errPrefix: 'JSON tidak sah: '
      },
      how: [
        'Alat ini menghuraikan teks anda dengan penghurai JSON terbina dalam pelayar. Jika gagal, mesej ralat penghurai dipaparkan supaya anda boleh mencari masalahnya. Jika berjaya, data ditulis semula dengan inden pilihan anda, atau pada satu baris apabila dikecilkan.'
      ],
      examples: [{ title: 'Kecilkan', text: '{ "a": 1, "b": [1, 2] } menjadi {"a":1,"b":[1,2]}.' }],
      faq: [
        { q: 'Adakah JSON saya dimuat naik ke mana-mana?', a: 'Tidak. Ia diproses secara setempat dalam pelayar anda.' },
        { q: 'Adakah pemformatan mengubah data saya?', a: 'Nilai dikekalkan, tetapi nombor dibaca sebagai nombor titik terapung piawai, jadi integer melebihi 9,007,199,254,740,991 boleh hilang ketepatan, dan kunci objek yang kelihatan seperti nombor bulat mungkin disenaraikan dahulu.' },
        { q: 'Mengapa JSON saya tidak sah?', a: 'Punca biasa ialah koma di hujung, petikan tunggal dan bukannya petikan berganda, kunci tanpa petikan dan komen. JSON tidak membenarkan semua itu.' }
      ]
    },
    'uuid-generator': {
      name: 'Penjana UUID',
      short: 'Jana UUID versi 4 secara rawak.',
      metaTitle: 'Penjana UUID: UUID v4 Rawak Dalam Talian',
      metaDescription: 'Penjana UUID dalam talian percuma. Cipta satu atau banyak UUID versi 4 rawak, dengan pilihan huruf besar dan tanpa sengkang. Dijana dalam pelayar anda.',
      h1: 'Penjana UUID',
      intro: 'Jana UUID versi 4 rawak (juga dipanggil GUID). Pilih berapa banyak yang anda perlukan dan salin dengan satu klik.',
      ui: {
        count: 'Berapa banyak (1 hingga 100)',
        upper: 'Huruf besar',
        hyphens: 'Sertakan sengkang',
        generate: 'Jana',
        copy: 'Salin',
        copied: 'Disalin ke papan klip.',
        copyFailed: 'Tidak dapat menyalin. Pilih teks dan salin secara manual.',
        outputLabel: 'UUID yang dijana',
        empty: 'Tekan Jana untuk mencipta UUID.',
        errCount: 'Masukkan nombor bulat dari 1 hingga 100.',
        errUnsupported: 'Pelayar ini tidak dapat menjana UUID dengan selamat. Sila gunakan pelayar terkini melalui HTTPS.'
      },
      how: [
        'UUID versi 4 ialah 128 bit, yang mana 122 adalah rawak. Alat ini menggunakan penjana selamat secara kriptografi dalam pelayar anda, crypto.randomUUID(), jadi tiada apa dihantar melalui rangkaian.',
        'Formatnya ialah 8-4-4-4-12 aksara heksadesimal, contohnya 3b241101-e2bb-4255-8caf-4136c566a962.'
      ],
      examples: [{ title: 'Tanpa sengkang, huruf besar', text: '3B241101E2BB42558CAF4136C566A962' }],
      faq: [
        { q: 'Bolehkah dua UUID sama?', a: 'Secara teori boleh, tetapi dengan 122 bit rawak ia sangat mustahil sehingga dianggap mustahil dalam praktik.' },
        { q: 'Adakah UUID sama dengan GUID?', a: 'Ya. GUID ialah nama yang digunakan Microsoft untuk format yang sama.' },
        { q: 'Adakah ini sesuai sebagai rahsia?', a: 'Ia rawak, tetapi UUID bertujuan sebagai pengecam. Gunakan penjana token selamat khusus untuk kata laluan atau kunci API.' }
      ]
    },
    'qr-code-generator': {
      name: 'Penjana Kod QR',
      short: 'Tukar pautan atau teks kepada kod QR yang boleh dimuat turun.',
      metaTitle: 'Penjana Kod QR: Cipta dan Muat Turun Kod QR',
      metaDescription: 'Penjana kod QR percuma. Tukar URL atau sebarang teks kepada kod QR dan muat turun sebagai PNG. Dijana dalam pelayar anda; tiada apa dimuat naik.',
      h1: 'Penjana Kod QR',
      intro: 'Taip atau tampal pautan atau sebarang teks untuk mencipta kod QR, kemudian muat turun sebagai imej PNG. Kod dijana dalam pelayar anda.',
      ui: {
        text: 'Teks atau URL',
        empty: 'Masukkan pautan atau teks untuk mencipta kod QR.',
        errTooLong: 'Terlalu panjang. Sila gunakan 1,000 aksara atau kurang.',
        errFailed: 'Kod QR tidak dapat dicipta untuk teks itu.',
        alt: 'Kod QR untuk teks yang anda masukkan',
        download: 'Muat turun PNG',
        note: 'Uji kod dengan kamera telefon sebelum mencetak atau berkongsinya.'
      },
      how: [
        'Teks dikodkan sebagai kod QR dengan pembetulan ralat sederhana, yang membolehkan kod masih boleh diimbas jika sebahagian kecil rosak atau tertutup. Teks yang lebih panjang menghasilkan kod yang lebih padat dan lebih sukar diimbas pada saiz kecil.',
        'Imej mempunyai sempadan putih (“zon senyap”) yang diperlukan pengimbas, jadi kekalkannya apabila anda menggunakan kod ini.'
      ],
      examples: [{ title: 'Pautan laman web', text: 'Masukkan https://utility.hidayat.my untuk mencipta kod yang membuka laman ini.' }],
      faq: [
        { q: 'Adakah kod QR tamat tempoh?', a: 'Tidak. Kod hanya mengandungi teks anda. Jika ia menunjuk ke laman web, ia berfungsi selagi laman web itu wujud.' },
        { q: 'Adakah teks dihantar ke pelayan?', a: 'Tidak. Kod dicipta dalam pelayar anda.' },
        { q: 'Mengapa kod saya tidak dapat diimbas?', a: 'Cuba teks yang lebih pendek, besarkan kod, dan kekalkan sempadan putih serta kontras yang baik.' }
      ]
    },
    'age-calculator': {
      name: 'Kalkulator Umur',
      short: 'Ketahui umur tepat anda dalam tahun, bulan dan hari.',
      metaTitle: 'Kalkulator Umur: Umur Tepat dalam Tahun, Bulan & Hari',
      metaDescription: 'Masukkan tarikh lahir untuk mendapat umur tepat dalam tahun, bulan dan hari, serta jumlah hari hidup dan baki hari ke hari jadi seterusnya. Percuma dan peribadi.',
      h1: 'Kalkulator Umur',
      intro: 'Masukkan tarikh lahir untuk melihat umur tepat dalam tahun, bulan dan hari, bersama jumlah hari hidup dan baki masa ke hari jadi seterusnya.',
      ui: {
        dob: 'Tarikh lahir',
        empty: 'Masukkan tarikh lahir untuk melihat keputusan.',
        errFuture: 'Tarikh itu belum tiba. Sila masukkan tarikh lahir yang telah berlalu.',
        errInvalid: 'Tarikh itu tidak sah.',
        age: 'Umur anda',
        summary: (y, m, d) => `${y} tahun, ${m} bulan, ${d} hari`,
        totalDays: 'Jumlah hari hidup',
        totalWeeks: 'Jumlah minggu',
        totalMonths: 'Jumlah bulan',
        nextBirthday: 'Hari jadi seterusnya',
        inDays: n => `dalam ${n} hari`,
        today: 'Hari ini!'
      },
      how: [
        'Kalkulator ini menolak tarikh lahir anda daripada tarikh hari ini, dengan meminjam daripada bulan dan tahun jika perlu. Jika hari dalam bulan belum tiba, satu bulan ditolak dan bilangan hari bulan sebelumnya ditambah.',
        'Jumlah hari ialah bilangan hari kalendar yang tepat antara kedua-dua tarikh. Bagi hari jadi 29 Februari, hari jadi seterusnya dikira pada 1 Mac dalam tahun bukan lompat.'
      ],
      examples: [
        { title: 'Lahir 15 Mei 1990, disemak pada 10 Mac 2024', text: '33 tahun, 9 bulan dan 24 hari. Hari jadi pada bulan Mei belum tiba, jadi umur masih 33.' },
        { title: 'Lahir hari ini', text: '0 tahun, 0 bulan dan 0 hari. Hari jadi seterusnya ialah dalam 365 atau 366 hari.' }
      ],
      faq: [
        { q: 'Adakah tarikh lahir saya disimpan di mana-mana?', a: 'Tidak. Pengiraan berjalan dalam pelayar anda dan tiada apa yang dihantar atau disimpan.' },
        { q: 'Tarikh mana yang digunakan sebagai “hari ini”?', a: 'Tarikh semasa peranti anda, mengikut zon waktu setempat anda.' },
        { q: 'Bolehkah saya mengira umur pada tarikh lampau atau akan datang?', a: 'Tidak dengan alat ini. Untuk mencari jarak antara mana-mana dua tarikh, gunakan Kalkulator Tarikh.' }
      ]
    },
    'percentage-calculator': {
      name: 'Kalkulator Peratusan',
      short: 'Peratus daripada nombor, perubahan peratusan, perbezaan dan lagi.',
      metaTitle: 'Kalkulator Peratusan: Peratus, Perubahan & Perbezaan',
      metaDescription: 'Kalkulator peratusan percuma: cari X% daripada nombor, berapa peratus satu nombor daripada yang lain, tambah atau kurangkan nombor, serta perubahan atau perbezaan peratusan.',
      h1: 'Kalkulator Peratusan',
      intro: 'Pilih ayat yang sepadan dengan soalan anda dan isi tempat kosong. Setiap pengiraan dikemas kini semasa anda menaip.',
      ui: {
        a: 'Nombor pertama',
        b: 'Nombor kedua',
        empty: 'Isi kedua-dua nombor.',
        errZero: 'Ini tidak boleh dikira kerana akan membahagi dengan sifar.',
        increased: 'peningkatan',
        decreased: 'penurunan',
        unchanged: 'tiada perubahan',
        ops: {
          of: { before: 'Berapakah', mid: '% daripada', after: '?', unit: '' },
          whatPct: { before: '', mid: 'ialah berapa peratus daripada', after: '?', unit: '%' },
          increase: { before: 'Tambah', mid: 'sebanyak', after: '%', unit: '', swap: true },
          decrease: { before: 'Kurangkan', mid: 'sebanyak', after: '%', unit: '', swap: true },
          change: { before: 'Perubahan peratusan daripada', mid: 'kepada', after: '', unit: '%' },
          difference: { before: 'Perbezaan peratusan antara', mid: 'dan', after: '', unit: '%' }
        }
      },
      how: [
        'Peratus daripada: X% daripada Y ialah X ÷ 100 × Y. “Berapa peratus” ialah X ÷ Y × 100.',
        'Tambah dan kurangkan menambah atau menolak peratusan itu daripada nombor. Perubahan peratusan membandingkan nilai baharu dengan nilai lama: (baharu − lama) ÷ lama × 100.',
        'Perbezaan peratusan digunakan apabila tiada nombor yang menjadi “asal”. Ia membahagikan jurang antara kedua-duanya dengan purata mereka.'
      ],
      examples: [
        { title: '20% daripada 150', text: '20 ÷ 100 × 150 = 30.' },
        { title: 'Harga naik daripada 80 kepada 100', text: '(100 − 80) ÷ 80 × 100 = peningkatan 25%.' },
        { title: 'Perbezaan antara 50 dan 150', text: '100 ÷ 100 × 100 = perbezaan 100%, kerana purata kedua-duanya ialah 100.' }
      ],
      faq: [
        { q: 'Apakah beza antara perubahan peratusan dan perbezaan peratusan?', a: 'Perubahan mempunyai nilai awal dan nilai akhir yang jelas, jadi ia boleh menjadi peningkatan atau penurunan. Perbezaan menganggap kedua-dua nombor sama dan sentiasa positif.' },
        { q: 'Mengapa peningkatan 50% diikuti penurunan 50% tidak kembali ke asal?', a: 'Peratusan kedua diambil daripada nombor yang lebih besar. 100 → 150 → 75.' },
        { q: 'Mengapa saya mendapat ralat?', a: 'Sesetengah soalan tiada jawapan, seperti perubahan peratusan daripada sifar.' }
      ]
    },
    'unit-converter': {
      name: 'Penukar Unit',
      short: 'Tukar unit panjang, berat dan suhu.',
      metaTitle: 'Penukar Unit: Panjang, Berat & Suhu',
      metaDescription: 'Penukar unit percuma untuk panjang (km, batu, kaki, inci), berat (kg, paun, auns) dan suhu (°C, °F, K). Keputusan segera dalam pelayar anda.',
      h1: 'Penukar Unit',
      intro: 'Pilih kategori, masukkan nilai dan pilih unit untuk ditukar. Panjang, berat dan suhu disokong.',
      ui: {
        category: 'Kategori',
        value: 'Nilai',
        from: 'Dari',
        to: 'Kepada',
        swap: 'Tukar ganti unit',
        empty: 'Masukkan nilai untuk ditukar.',
        errBelowZero: 'Suhu itu berada di bawah sifar mutlak, yang mustahil secara fizikal.',
        errNegative: 'Panjang dan berat tidak boleh negatif.',
        errBadUnit: 'Sila pilih unit yang sah.',
        categories: { length: 'Panjang', weight: 'Berat', temperature: 'Suhu' },
        units: {
          mm: 'Milimeter (mm)', cm: 'Sentimeter (cm)', m: 'Meter (m)', km: 'Kilometer (km)',
          in: 'Inci (in)', ft: 'Kaki (ft)', yd: 'Ela (yd)', mi: 'Batu (mi)',
          mg: 'Miligram (mg)', g: 'Gram (g)', kg: 'Kilogram (kg)', t: 'Tan metrik (t)',
          oz: 'Auns (oz)', lb: 'Paun (lb)',
          c: 'Celsius (°C)', f: 'Fahrenheit (°F)', k: 'Kelvin (K)'
        }
      },
      how: [
        'Unit panjang dan berat ditukar dengan mendarab satu faktor tetap. Setiap nilai ditukar dahulu kepada unit asas (meter atau kilogram) dan kemudian kepada unit pilihan anda.',
        'Suhu berbeza kerana skalanya bermula pada titik yang berlainan. Celsius kepada Fahrenheit ialah °C × 9 ÷ 5 + 32, dan Kelvin ialah Celsius + 273.15.',
        'Faktor penukaran ialah takrifan antarabangsa yang tepat, contohnya 1 inci = 2.54 cm dan 1 paun = 0.45359237 kg.'
      ],
      examples: [
        { title: '5 kilometer dalam batu', text: '5 km ≈ 3.10686 batu.' },
        { title: '70 kilogram dalam paun', text: '70 kg ≈ 154.324 lb.' },
        { title: '100 °C dalam Fahrenheit', text: '100 × 9 ÷ 5 + 32 = 212 °F.' }
      ],
      faq: [
        { q: 'Setepat mana keputusannya?', a: 'Keputusan dipaparkan sehingga 10 digit bererti, mencukupi untuk kegunaan harian.' },
        { q: 'Mengapa saya tidak boleh memasukkan suhu di bawah sifar mutlak?', a: 'Sifar mutlak (−273.15 °C, 0 K) ialah suhu paling rendah yang mungkin, jadi nilai yang lebih rendah ditolak.' },
        { q: 'Adakah unit AS dan UK sama?', a: 'Bagi unit panjang dan berat di sini, ya. Inci, kaki, ela, batu, auns dan paun antarabangsa digunakan.' }
      ]
    },
    'bmi-calculator': {
      name: 'Kalkulator BMI',
      short: 'Kira indeks jisim badan dalam unit metrik atau imperial.',
      metaTitle: 'Kalkulator BMI: Indeks Jisim Badan Metrik & Imperial',
      metaDescription: 'Kalkulator BMI percuma untuk orang dewasa. Masukkan tinggi dan berat dalam unit metrik atau imperial untuk melihat BMI dan kategori WHO. Bukan nasihat perubatan.',
      h1: 'Kalkulator BMI',
      intro: 'Masukkan tinggi dan berat dalam unit metrik atau imperial untuk melihat indeks jisim badan (BMI) dan kategori dewasa yang sepadan.',
      ui: {
        system: 'Unit',
        metric: 'Metrik (cm, kg)',
        imperial: 'Imperial (kaki/inci, paun)',
        height: 'Tinggi (cm)',
        weight: 'Berat (kg)',
        feet: 'Tinggi (kaki)',
        inches: 'Tinggi (inci)',
        pounds: 'Berat (paun)',
        empty: 'Masukkan tinggi dan berat anda untuk melihat keputusan.',
        errInvalid: 'Tinggi dan berat mestilah lebih besar daripada sifar.',
        errRange: 'Nilai itu kelihatan tidak realistik. Sila semak tinggi dan berat.',
        bmi: 'BMI anda',
        category: 'Kategori',
        categories: { underweight: 'Kekurangan berat badan', normal: 'Berat normal', overweight: 'Berat berlebihan', obese: 'Obes' },
        scale: 'Kategori dewasa: bawah 18.5 kekurangan berat badan, 18.5 hingga 24.9 normal, 25 hingga 29.9 berat berlebihan, 30 ke atas obes.',
        disclaimer: 'BMI ialah ukuran saringan am, bukan diagnosis, dan alat ini tidak memberikan nasihat perubatan. Bincang dengan doktor atau profesional kesihatan bertauliah tentang kesihatan anda.'
      },
      how: [
        'BMI ialah berat dalam kilogram dibahagi tinggi dalam meter kuasa dua. Input imperial ditukar dahulu kepada kilogram dan meter.',
        'Kategori mengikut julat dewasa Pertubuhan Kesihatan Sedunia (WHO). Ia sama untuk lelaki dan perempuan.'
      ],
      examples: [{ title: '70 kg dan 175 cm', text: '70 ÷ (1.75 × 1.75) ≈ 22.9, iaitu dalam julat normal.' }],
      faq: [
        { q: 'Adakah BMI tepat untuk semua orang?', a: 'Tidak. BMI tidak membezakan otot daripada lemak atau menunjukkan lokasi lemak, dan ia tidak direka untuk kanak-kanak, wanita mengandung atau atlet bertanding.' },
        { q: 'Adakah semua garis panduan menggunakan had yang sama?', a: 'Tidak semestinya. Sesetengah garis panduan untuk populasi Asia menggunakan ambang yang lebih rendah. Tanya doktor anda yang mana sesuai untuk anda.' },
        { q: 'Adakah data saya disimpan?', a: 'Tidak. Semuanya dikira dalam pelayar anda.' }
      ]
    },
    'date-calculator': {
      name: 'Kalkulator Tarikh',
      short: 'Hari antara dua tarikh, atau tambah dan tolak hari.',
      metaTitle: 'Kalkulator Tarikh: Hari Antara Tarikh, Tambah atau Tolak Hari',
      metaDescription: 'Kalkulator tarikh percuma: kira bilangan hari antara dua tarikh, atau tambah dan tolak hari daripada tarikh untuk mencari tarikh dan hari yang terhasil.',
      h1: 'Kalkulator Tarikh',
      intro: 'Kira bilangan hari antara dua tarikh, atau tambah atau tolak hari daripada sesuatu tarikh.',
      ui: {
        mode: 'Apa yang anda mahu lakukan?',
        modes: { between: 'Hari antara dua tarikh', add: 'Tambah hari pada tarikh', subtract: 'Tolak hari daripada tarikh' },
        start: 'Tarikh mula',
        end: 'Tarikh tamat',
        date: 'Tarikh',
        days: 'Bilangan hari',
        empty: 'Isi semua medan untuk melihat keputusan.',
        errDays: 'Masukkan bilangan hari yang bulat antara 0 dan 365,000.',
        errOutOfRange: 'Keputusan itu di luar julat tahun yang disokong (1000 hingga 9999).',
        daysApart: n => `${n} hari`,
        weeksDays: (w, d) => `${w} minggu dan ${d} hari`,
        resultDate: 'Tarikh yang terhasil',
        sameDay: 'Kedua-dua tarikh adalah pada hari yang sama.'
      },
      how: [
        'Tarikh dibandingkan sebagai hari kalendar yang penuh, jadi zon waktu dan perubahan waktu siang tidak menjejaskan keputusan. Hari mula tidak dikira: Isnin ke Selasa ialah 1 hari.',
        'Menambah atau menolak hari menggerakkan kalendar ke hadapan atau ke belakang, termasuk merentasi bulan, tahun dan hari lompat.'
      ],
      examples: [
        { title: '1 Januari hingga 31 Disember 2024', text: '365 hari, kerana 2024 ialah tahun lompat dengan 366 hari dan hari mula tidak dikira.' },
        { title: '28 Februari 2024 tambah 2 hari', text: '1 Mac 2024, kerana 29 Februari wujud pada 2024.' }
      ],
      faq: [
        { q: 'Adakah tarikh tamat termasuk?', a: 'Kiraan ialah perbezaan antara tarikh, jadi hari mula tidak dikira. Tambah 1 jika anda perlu kedua-dua hari dimasukkan.' },
        { q: 'Adakah susunan tarikh penting?', a: 'Tidak. Alat ini menunjukkan bilangan hari antara keduanya tidak kira yang mana lebih awal.' },
        { q: 'Adakah ia mengira hari bekerja?', a: 'Buat masa ini tidak. Ia mengira setiap hari kalendar.' }
      ]
    }
  }
}

export default ms
