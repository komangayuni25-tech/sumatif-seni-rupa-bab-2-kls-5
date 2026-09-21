import { Question } from '../types';

export const INITIAL_QUESTIONS: Question[] = [
  // =========================================================================
  // BAGIAN I: PILIHAN GANDA (35 BUTIR SOAL)
  // Lingkup Materi: Mengeksplorasi ritme dalam objek di sekitar kita,
  //                 menggambar dengan menerapkan prinsip ritme
  // =========================================================================

  // --- SOAL 1 (PG) ---
  {
    id: 1,
    type: 'pg',
    topic: 'Pengertian Ritme dalam Seni Rupa',
    difficulty: 'Mudah',
    text: 'Perhatikan susunan pola pada gambar di atas!\nDalam seni rupa, pengulangan satu atau lebih unsur seni rupa (seperti garis, bentuk, atau warna) secara teratur dan terus-menerus sehingga menimbulkan kesan gerak visual disebut...',
    image: `<svg viewBox="0 0 420 120" xmlns="http://www.w3.org/2000/svg" class="w-full max-w-md mx-auto">
      <rect width="420" height="120" rx="12" fill="#F8FAFC" stroke="#E2E8F0" stroke-width="1.5"/>
      <text x="210" y="24" fill="#1E293B" font-size="12" font-weight="bold" text-anchor="middle">POLA PENGULANGAN TERATUR (RITME / IRAMA)</text>
      <g transform="translate(30, 42)">
        <circle cx="25" cy="25" r="20" fill="#2563EB"/>
        <circle cx="85" cy="25" r="20" fill="#2563EB"/>
        <circle cx="145" cy="25" r="20" fill="#2563EB"/>
        <circle cx="205" cy="25" r="20" fill="#2563EB"/>
        <circle cx="265" cy="25" r="20" fill="#2563EB"/>
        <circle cx="325" cy="25" r="20" fill="#2563EB"/>
        <path d="M 45 25 Q 55 10 65 25" fill="none" stroke="#60A5FA" stroke-width="2" stroke-dasharray="3,3"/>
        <path d="M 105 25 Q 115 10 125 25" fill="none" stroke="#60A5FA" stroke-width="2" stroke-dasharray="3,3"/>
        <path d="M 165 25 Q 175 10 185 25" fill="none" stroke="#60A5FA" stroke-width="2" stroke-dasharray="3,3"/>
        <path d="M 225 25 Q 235 10 245 25" fill="none" stroke="#60A5FA" stroke-width="2" stroke-dasharray="3,3"/>
        <path d="M 285 25 Q 295 10 305 25" fill="none" stroke="#60A5FA" stroke-width="2" stroke-dasharray="3,3"/>
      </g>
      <text x="210" y="105" fill="#64748B" font-size="11" text-anchor="middle">Jarak (interval) dan bentuk sama mengalir secara berulang</text>
    </svg>`,
    options: [
      { id: 'A', text: 'Keseimbangan (Balance)' },
      { id: 'B', text: 'Ritme atau Irama (Rhythm)' },
      { id: 'C', text: 'Kesebandingan (Proporsi)' },
      { id: 'D', text: 'Pusat Perhatian (Center of Interest)' },
    ],
    correctAnswer: 'B',
    explanation:
      'Ritme (irama) dalam seni rupa adalah prinsip penyusunan karya dengan mengulang satu atau lebih unsur rupa (garis, bidang, bentuk, atau warna) secara teratur dan berkesinambungan sehingga menciptakan alunan pandang dan kesan gerakan visual yang dinamis.',
  },

  // --- SOAL 2 (PG) ---
  {
    id: 2,
    type: 'pg',
    topic: 'Ritme Repetisi (Pengulangan Murni)',
    difficulty: 'Mudah',
    text: 'Perhatikan pola gambar ubin keramik pada gambar di atas.\nPengulangan bentuk motif yang sama persis dalam hal ukuran, bentuk, dan jarak antar-motif secara teratur disebut jenis ritme...',
    image: `<svg viewBox="0 0 420 120" xmlns="http://www.w3.org/2000/svg" class="w-full max-w-md mx-auto">
      <rect width="420" height="120" rx="12" fill="#F8FAFC" stroke="#E2E8F0" stroke-width="1.5"/>
      <text x="210" y="22" fill="#1E293B" font-size="12" font-weight="bold" text-anchor="middle">POLA REPETISI MURNI (UKURAN & BENTUK SAMA)</text>
      <g transform="translate(45, 38)">
        <rect x="0" y="0" width="50" height="50" rx="6" fill="#0284C7" stroke="#0369A1" stroke-width="1.5"/>
        <circle cx="25" cy="25" r="14" fill="#E0F2FE"/>
        <rect x="70" y="0" width="50" height="50" rx="6" fill="#0284C7" stroke="#0369A1" stroke-width="1.5"/>
        <circle cx="95" cy="25" r="14" fill="#E0F2FE"/>
        <rect x="140" y="0" width="50" height="50" rx="6" fill="#0284C7" stroke="#0369A1" stroke-width="1.5"/>
        <circle cx="165" cy="25" r="14" fill="#E0F2FE"/>
        <rect x="210" y="0" width="50" height="50" rx="6" fill="#0284C7" stroke="#0369A1" stroke-width="1.5"/>
        <circle cx="235" cy="25" r="14" fill="#E0F2FE"/>
        <rect x="280" y="0" width="50" height="50" rx="6" fill="#0284C7" stroke="#0369A1" stroke-width="1.5"/>
        <circle cx="305" cy="25" r="14" fill="#E0F2FE"/>
      </g>
      <text x="210" y="106" fill="#0369A1" font-size="11" font-weight="bold" text-anchor="middle">Motif A - Motif A - Motif A - Motif A - Motif A</text>
    </svg>`,
    options: [
      { id: 'A', text: 'Repetisi (Pengulangan Murni)' },
      { id: 'B', text: 'Transisi (Gradasi)' },
      { id: 'C', text: 'Oposisi (Kontras Tajam)' },
      { id: 'D', text: 'Asimetris (Acak)' },
    ],
    correctAnswer: 'A',
    explanation:
      'Ritme Repetisi (pengulangan murni/statis) adalah jenis ritme yang paling sederhana di mana unsur rupa (motif, bentuk, ukuran, dan jarak) diulang secara sama persis tanpa mengalami perubahan bentuk maupun ukuran.',
  },

  // --- SOAL 3 (PG) ---
  {
    id: 3,
    type: 'pg',
    topic: 'Ritme Transisi / Gradasi Ukuran',
    difficulty: 'Mudah',
    text: 'Perhatikan deretan bentuk lingkaran pada gambar di atas!\nSusunan objek yang mengalami perubahan ukuran secara bertahap (mulai dari sangat kecil, sedang, hingga sangat besar) menerapkan jenis ritme...',
    image: `<svg viewBox="0 0 420 120" xmlns="http://www.w3.org/2000/svg" class="w-full max-w-md mx-auto">
      <rect width="420" height="120" rx="12" fill="#F8FAFC" stroke="#E2E8F0" stroke-width="1.5"/>
      <text x="210" y="22" fill="#1E293B" font-size="12" font-weight="bold" text-anchor="middle">RITME TRANSISI / GRADASI UKURAN</text>
      <g transform="translate(30, 60)">
        <circle cx="20" cy="0" r="10" fill="#10B981"/>
        <circle cx="65" cy="0" r="16" fill="#10B981"/>
        <circle cx="125" cy="0" r="23" fill="#10B981"/>
        <circle cx="200" cy="0" r="30" fill="#10B981"/>
        <circle cx="295" cy="0" r="38" fill="#10B981"/>
      </g>
      <text x="210" y="110" fill="#047857" font-size="11" font-weight="bold" text-anchor="middle">Kecil ➔ Sedang ➔ Besar ➔ Lebih Besar (Bertahap)</text>
    </svg>`,
    options: [
      { id: 'A', text: 'Repetisi statis' },
      { id: 'B', text: 'Transisi atau Gradasi (Progression)' },
      { id: 'C', text: 'Oposisi tegak lurus' },
      { id: 'D', text: 'Pola acak tanpa aturan' },
    ],
    correctAnswer: 'B',
    explanation:
      'Ritme Transisi (sering disebut juga Ritme Gradasi atau Progresi) adalah susunan ritme yang mengalami perubahan berangsur-angsur secara teratur dan berurutan, baik dari perubahan ukuran (kecil ke besar), warna (terang ke gelap), maupun bentuk.',
  },

  // --- SOAL 4 (PG) ---
  {
    id: 4,
    type: 'pg',
    topic: 'Ritme Alternasi / Selang-Seling',
    difficulty: 'Mudah',
    text: 'Perhatikan susunan bentuk segitiga dan lingkaran pada gambar di atas!\nPengulangan dua bentuk atau warna yang diletakkan secara bergantian (A - B - A - B - A - B) disebut prinsip ritme...',
    image: `<svg viewBox="0 0 420 120" xmlns="http://www.w3.org/2000/svg" class="w-full max-w-md mx-auto">
      <rect width="420" height="120" rx="12" fill="#F8FAFC" stroke="#E2E8F0" stroke-width="1.5"/>
      <text x="210" y="22" fill="#1E293B" font-size="12" font-weight="bold" text-anchor="middle">RITME ALTERNASI / SELANG-SELING</text>
      <g transform="translate(30, 38)">
        <!-- Segitiga A1 -->
        <polygon points="25,4 46,46 4,46" fill="#F59E0B" stroke="#D97706" stroke-width="1.5"/>
        <!-- Lingkaran B1 -->
        <circle cx="85" cy="25" r="21" fill="#6366F1" stroke="#4F46E5" stroke-width="1.5"/>
        <!-- Segitiga A2 -->
        <polygon points="145,4 166,46 124,46" fill="#F59E0B" stroke="#D97706" stroke-width="1.5"/>
        <!-- Lingkaran B2 -->
        <circle cx="205" cy="25" r="21" fill="#6366F1" stroke="#4F46E5" stroke-width="1.5"/>
        <!-- Segitiga A3 -->
        <polygon points="265,4 286,46 244,46" fill="#F59E0B" stroke="#D97706" stroke-width="1.5"/>
        <!-- Lingkaran B3 -->
        <circle cx="325" cy="25" r="21" fill="#6366F1" stroke="#4F46E5" stroke-width="1.5"/>
      </g>
      <text x="210" y="106" fill="#4338CA" font-size="11" font-weight="bold" text-anchor="middle">Segitiga - Lingkaran - Segitiga - Lingkaran (Bergantian)</text>
    </svg>`,
    options: [
      { id: 'A', text: 'Alternasi (Selang-seling)' },
      { id: 'B', text: 'Repetisi murni satu motif' },
      { id: 'C', text: 'Transisi satu warna' },
      { id: 'D', text: 'Distorsi bentuk' },
    ],
    correctAnswer: 'A',
    explanation:
      'Ritme Alternasi (selang-seling) adalah pengulangan dua atau lebih unsur seni rupa (seperti segitiga dan lingkaran, atau warna kuning dan biru) yang disusun secara bergantian secara konsisten dan teratur.',
  },

  // --- SOAL 5 (PG) ---
  {
    id: 5,
    type: 'pg',
    topic: 'Ritme Mengalir / Bergelombang',
    difficulty: 'Mudah',
    text: 'Perhatikan gambar garis ombak laut di atas.\nGaris-garis lengkung lembut yang berulang secara bersambung sehingga memberi kesan gemulai, lentur, dan gerakan alami air disebut ritme...',
    image: `<svg viewBox="0 0 420 120" xmlns="http://www.w3.org/2000/svg" class="w-full max-w-md mx-auto">
      <rect width="420" height="120" rx="12" fill="#F8FAFC" stroke="#E2E8F0" stroke-width="1.5"/>
      <text x="210" y="22" fill="#1E293B" font-size="12" font-weight="bold" text-anchor="middle">RITME MENGALIR / BERGELOMBANG (FLOWING)</text>
      <g transform="translate(20, 36)">
        <path d="M 0 35 Q 45 0, 90 35 T 180 35 T 270 35 T 360 35" fill="none" stroke="#0284C7" stroke-width="4"/>
        <path d="M 0 45 Q 45 10, 90 45 T 180 45 T 270 45 T 360 45" fill="none" stroke="#38BDF8" stroke-width="3"/>
        <path d="M 0 55 Q 45 20, 90 55 T 180 55 T 270 55 T 360 55" fill="none" stroke="#BAE6FD" stroke-width="2"/>
      </g>
      <text x="210" y="106" fill="#0369A1" font-size="11" font-weight="bold" text-anchor="middle">Garis melengkung berulang dinamis menyerupai aliran gelombang air</text>
    </svg>`,
    options: [
      { id: 'A', text: 'Kaku dan statis' },
      { id: 'B', text: 'Mengalir atau bergelombang (Flowing Rhythm)' },
      { id: 'C', text: 'Oposisi siku-siku' },
      { id: 'D', text: 'Patahan tajam (Zig-zag)' },
    ],
    correctAnswer: 'B',
    explanation:
      'Ritme Mengalir (Flowing Rhythm) tercipta dari penggunaan garis-garis lengkung bergelombang secara berkesinambungan, yang menghadirkan kesan gerakan lentur, tenang, dinamis, dan alami seperti aliran sungai atau ombak di pantai.',
  },

  // --- SOAL 6 (PG) ---
  {
    id: 6,
    type: 'pg',
    topic: 'Ritme Oposisi / Kontras Tajam',
    difficulty: 'Sedang',
    text: 'Perhatikan susunan garis vertikal yang langsung memotong garis horizontal membentuk sudut siku-siku serta motif kotak hitam-putih pada gambar di atas!\nRitme yang tercipta dari pertemuan dua unsur yang saling bertentangan secara tegas dan tajam disebut ritme...',
    image: `<svg viewBox="0 0 420 120" xmlns="http://www.w3.org/2000/svg" class="w-full max-w-md mx-auto">
      <rect width="420" height="120" rx="12" fill="#F8FAFC" stroke="#E2E8F0" stroke-width="1.5"/>
      <text x="210" y="22" fill="#1E293B" font-size="12" font-weight="bold" text-anchor="middle">RITME OPOSISI (PERTEMUAN SUDUT SIKU-SIKU / KONTRAS)</text>
      <!-- Pola Papan Catur Siku-siku -->
      <g transform="translate(60, 36)">
        <rect x="0" y="0" width="24" height="24" fill="#0F172A"/>
        <rect x="24" y="0" width="24" height="24" fill="#E2E8F0"/>
        <rect x="48" y="0" width="24" height="24" fill="#0F172A"/>
        <rect x="72" y="0" width="24" height="24" fill="#E2E8F0"/>
        <rect x="0" y="24" width="24" height="24" fill="#E2E8F0"/>
        <rect x="24" y="24" width="24" height="24" fill="#0F172A"/>
        <rect x="48" y="24" width="24" height="24" fill="#E2E8F0"/>
        <rect x="72" y="24" width="24" height="24" fill="#0F172A"/>
      </g>
      <!-- Garis Tegak Lurus Berulang -->
      <g transform="translate(200, 36)">
        <path d="M 0 0 L 40 0 L 40 48 L 80 48 L 80 0 L 120 0 L 120 48 L 160 48" fill="none" stroke="#DC2626" stroke-width="3"/>
      </g>
      <text x="210" y="106" fill="#475569" font-size="11" text-anchor="middle">Pertemuan garis tegak lurus (90°) & kontras warna gelap-terang tegas</text>
    </svg>`,
    options: [
      { id: 'A', text: 'Oposisi (Opposition)' },
      { id: 'B', text: 'Repetisi melingkar' },
      { id: 'C', text: 'Transisi halus' },
      { id: 'D', text: 'Acak tak teratur' },
    ],
    correctAnswer: 'A',
    explanation:
      'Ritme Oposisi terjadi ketika ada dua unsur yang berlawanan dan saling bertemu secara mendadak, misalnya garis vertikal bertemu garis horizontal (membentuk sudut 90°) atau pertemuan warna komplementer yang sangat kontras seperti hitam dan putih pada papan catur.',
  },

  // --- SOAL 7 (PG) ---
  {
    id: 7,
    type: 'pg',
    topic: 'Eksplorasi Ritme pada Hewan (Sisik Ikan)',
    difficulty: 'Mudah',
    text: 'Perhatikan gambar ikan di atas!\nSusunan sisik pada tubuh ikan tersusun rapi berderet-deret dan berlapis-lapis secara teratur. Fenomena alam ini merupakan contoh penerapan prinsip seni rupa berupa...',
    image: `<svg viewBox="0 0 420 120" xmlns="http://www.w3.org/2000/svg" class="w-full max-w-md mx-auto">
      <rect width="420" height="120" rx="12" fill="#F8FAFC" stroke="#E2E8F0" stroke-width="1.5"/>
      <g transform="translate(90, 15)">
        <!-- Tubuh Ikan -->
        <ellipse cx="120" cy="45" rx="80" ry="38" fill="#FEF3C7" stroke="#D97706" stroke-width="2"/>
        <!-- Ekor Ikan -->
        <polygon points="200,45 235,15 225,45 235,75" fill="#F59E0B"/>
        <!-- Mata & Mulut -->
        <circle cx="58" cy="40" r="5" fill="#1E293B"/>
        <circle cx="56" cy="38" r="1.5" fill="#FFFFFF"/>
        <!-- Sisik-sisik Melengkung Teratur -->
        <path d="M 90 28 A 10 10 0 0 1 105 28 A 10 10 0 0 1 120 28 A 10 10 0 0 1 135 28" fill="none" stroke="#D97706" stroke-width="2"/>
        <path d="M 82 42 A 10 10 0 0 1 97 42 A 10 10 0 0 1 112 42 A 10 10 0 0 1 127 42 A 10 10 0 0 1 142 42" fill="none" stroke="#D97706" stroke-width="2"/>
        <path d="M 90 56 A 10 10 0 0 1 105 56 A 10 10 0 0 1 120 56 A 10 10 0 0 1 135 56" fill="none" stroke="#D97706" stroke-width="2"/>
      </g>
      <text x="210" y="108" fill="#B45309" font-size="11" font-weight="bold" text-anchor="middle">Susunan lengkung sisik ikan membentuk ritme alami repetisi berlapis</text>
    </svg>`,
    options: [
      { id: 'A', text: 'Ritme pengulangan garis lengkung alami' },
      { id: 'B', text: 'Perspektif satu titik lenyap' },
      { id: 'C', text: 'Gelap terang bayangan jatuh' },
      { id: 'D', text: 'Keseimbangan asimetris murni' },
    ],
    correctAnswer: 'A',
    explanation:
      'Susunan sisik pada tubuh ikan di alam merupakan contoh nyata ritme alami (natural rhythm). Bentuk lengkung sisik diulang secara berbaris dan bertumpuk selang-seling secara konsisten sehingga menciptakan tekstur visual yang berirama indah.',
  },

  // --- SOAL 8 (PG) ---
  {
    id: 8,
    type: 'pg',
    topic: 'Eksplorasi Ritme pada Tumbuhan (Daun Palem/Kelapa)',
    difficulty: 'Mudah',
    text: 'Perhatikan gambar sehelai daun tanaman kelapa/palem di atas!\nAnak-anak daun yang berjejer rapi di sisi kiri dan kanan tangkai utama dengan jarak dan sudut kemiringan yang teratur menunjukkan ritme berupa...',
    image: `<svg viewBox="0 0 420 120" xmlns="http://www.w3.org/2000/svg" class="w-full max-w-md mx-auto">
      <rect width="420" height="120" rx="12" fill="#F8FAFC" stroke="#E2E8F0" stroke-width="1.5"/>
      <g transform="translate(40, 20)">
        <!-- Batang Utama Daun -->
        <line x1="10" y1="40" x2="330" y2="40" stroke="#15803D" stroke-width="3"/>
        <!-- Helai Daun Atas -->
        <line x1="50" y1="40" x2="30" y2="12" stroke="#16A34A" stroke-width="2.5"/>
        <line x1="90" y1="40" x2="70" y2="12" stroke="#16A34A" stroke-width="2.5"/>
        <line x1="130" y1="40" x2="110" y2="12" stroke="#16A34A" stroke-width="2.5"/>
        <line x1="170" y1="40" x2="150" y2="12" stroke="#16A34A" stroke-width="2.5"/>
        <line x1="210" y1="40" x2="190" y2="12" stroke="#16A34A" stroke-width="2.5"/>
        <line x1="250" y1="40" x2="230" y2="12" stroke="#16A34A" stroke-width="2.5"/>
        <line x1="290" y1="40" x2="270" y2="12" stroke="#16A34A" stroke-width="2.5"/>
        <!-- Helai Daun Bawah -->
        <line x1="50" y1="40" x2="30" y2="68" stroke="#16A34A" stroke-width="2.5"/>
        <line x1="90" y1="40" x2="70" y2="68" stroke="#16A34A" stroke-width="2.5"/>
        <line x1="130" y1="40" x2="110" y2="68" stroke="#16A34A" stroke-width="2.5"/>
        <line x1="170" y1="40" x2="150" y2="68" stroke="#16A34A" stroke-width="2.5"/>
        <line x1="210" y1="40" x2="190" y2="68" stroke="#16A34A" stroke-width="2.5"/>
        <line x1="250" y1="40" x2="230" y2="68" stroke="#16A34A" stroke-width="2.5"/>
        <line x1="290" y1="40" x2="270" y2="68" stroke="#16A34A" stroke-width="2.5"/>
      </g>
      <text x="210" y="108" fill="#166534" font-size="11" font-weight="bold" text-anchor="middle">Pengulangan garis-garis miring berjejer rapi pada tangkai daun</text>
    </svg>`,
    options: [
      { id: 'A', text: 'Pengulangan garis lurus miring yang teratur di alam' },
      { id: 'B', text: 'Pola lingkaran acak tanpa aturan' },
      { id: 'C', text: 'Gradasi warna hitam putih' },
      { id: 'D', text: 'Pola bintik titik tak beraturan' },
    ],
    correctAnswer: 'A',
    explanation:
      'Pada daun kelapa atau daun pakis, helai-helai daun tersusun berjejer ke arah yang sama dengan jarak (interval) yang relatif seragam di sepanjang tangkainya. Ini adalah contoh pengulangan garis miring yang menciptakan ritme visual yang rapi.',
  },

  // --- SOAL 9 (PG) ---
  {
    id: 9,
    type: 'pg',
    topic: 'Eksplorasi Ritme pada Cangkang Kerang (Spiral Nautilus)',
    difficulty: 'Sedang',
    text: 'Perhatikan gambar cangkang kerang nautilus di atas!\nRuang-ruang sekat pada cangkang melingkar spiral dari ukuran terkecil di pusat dan membesar secara teratur menuju tepi luar. Ritme jenis apakah yang terdapat pada cangkang kerang tersebut?',
    image: `<svg viewBox="0 0 420 120" xmlns="http://www.w3.org/2000/svg" class="w-full max-w-md mx-auto">
      <rect width="420" height="120" rx="12" fill="#F8FAFC" stroke="#E2E8F0" stroke-width="1.5"/>
      <g transform="translate(160, 10)">
        <path d="M 50 50 A 5 5 0 0 1 55 45 A 10 10 0 0 1 65 55 A 18 18 0 0 1 45 70 A 30 30 0 0 1 15 40 A 45 45 0 0 1 65 0 A 60 60 0 0 1 110 65" 
              fill="none" stroke="#D97706" stroke-width="3"/>
        <line x1="50" y1="50" x2="55" y2="45" stroke="#B45309" stroke-width="1.5"/>
        <line x1="55" y1="45" x2="65" y2="55" stroke="#B45309" stroke-width="1.5"/>
        <line x1="65" y1="55" x2="45" y2="70" stroke="#B45309" stroke-width="1.5"/>
        <line x1="45" y1="70" x2="15" y2="40" stroke="#B45309" stroke-width="1.5"/>
        <line x1="15" y1="40" x2="65" y2="0" stroke="#B45309" stroke-width="1.5"/>
        <line x1="65" y1="0" x2="110" y2="65" stroke="#B45309" stroke-width="1.5"/>
      </g>
      <text x="210" y="108" fill="#92400E" font-size="11" font-weight="bold" text-anchor="middle">Ruang sekat melingkar spiral membesar secara bertahap (Transisi Spiral)</text>
    </svg>`,
    options: [
      { id: 'A', text: 'Ritme transisi / gradasi pembesaran ukuran memutar (spiral)' },
      { id: 'B', text: 'Ritme oposisi garis lurus' },
      { id: 'C', text: 'Ritme acak tidak bersambung' },
      { id: 'D', text: 'Ritme statis ukuran seragam' },
    ],
    correctAnswer: 'A',
    explanation:
      'Cangkang kerang nautilus dan rumah bekicot merupakan mahakarya ritme transisi spiral alami (golden spiral / deret pertumbuhan alami), di mana ruang kamar cangkang membesar secara bertahap dan teratur seiring pertumbuhan hewan tersebut.',
  },

  // --- SOAL 10 (PG) ---
  {
    id: 10,
    type: 'pg',
    topic: 'Eksplorasi Ritme pada Motif Batik Kawung',
    difficulty: 'Mudah',
    text: 'Perhatikan gambar motif Batik Kawung khas Nusantara di atas!\nMotif batik ini tersusun dari empat bulatan lonjong (elips) menyerupai buah kolang-kaling yang ditata berulang secara simetris membentuk pola anyaman bunga. Motif ini menerapkan prinsip ritme...',
    image: `<svg viewBox="0 0 420 120" xmlns="http://www.w3.org/2000/svg" class="w-full max-w-md mx-auto">
      <rect width="420" height="120" rx="12" fill="#F8FAFC" stroke="#E2E8F0" stroke-width="1.5"/>
      <g transform="translate(110, 15)">
        <!-- Motif Kawung 1 -->
        <g transform="translate(30, 40)">
          <ellipse cx="0" cy="-14" rx="7" ry="13" fill="#78350F" stroke="#FDE68A" stroke-width="1"/>
          <ellipse cx="0" cy="14" rx="7" ry="13" fill="#78350F" stroke="#FDE68A" stroke-width="1"/>
          <ellipse cx="-14" cy="0" rx="13" ry="7" fill="#78350F" stroke="#FDE68A" stroke-width="1"/>
          <ellipse cx="14" cy="0" rx="13" ry="7" fill="#78350F" stroke="#FDE68A" stroke-width="1"/>
          <circle cx="0" cy="0" r="3" fill="#FDE68A"/>
        </g>
        <!-- Motif Kawung 2 -->
        <g transform="translate(100, 40)">
          <ellipse cx="0" cy="-14" rx="7" ry="13" fill="#78350F" stroke="#FDE68A" stroke-width="1"/>
          <ellipse cx="0" cy="14" rx="7" ry="13" fill="#78350F" stroke="#FDE68A" stroke-width="1"/>
          <ellipse cx="-14" cy="0" rx="13" ry="7" fill="#78350F" stroke="#FDE68A" stroke-width="1"/>
          <ellipse cx="14" cy="0" rx="13" ry="7" fill="#78350F" stroke="#FDE68A" stroke-width="1"/>
          <circle cx="0" cy="0" r="3" fill="#FDE68A"/>
        </g>
        <!-- Motif Kawung 3 -->
        <g transform="translate(170, 40)">
          <ellipse cx="0" cy="-14" rx="7" ry="13" fill="#78350F" stroke="#FDE68A" stroke-width="1"/>
          <ellipse cx="0" cy="14" rx="7" ry="13" fill="#78350F" stroke="#FDE68A" stroke-width="1"/>
          <ellipse cx="-14" cy="0" rx="13" ry="7" fill="#78350F" stroke="#FDE68A" stroke-width="1"/>
          <ellipse cx="14" cy="0" rx="13" ry="7" fill="#78350F" stroke="#FDE68A" stroke-width="1"/>
          <circle cx="0" cy="0" r="3" fill="#FDE68A"/>
        </g>
      </g>
      <text x="210" y="108" fill="#78350F" font-size="11" font-weight="bold" text-anchor="middle">Motif Batik Kawung: Pengulangan modul elips teratur secara geometris</text>
    </svg>`,
    options: [
      { id: 'A', text: 'Repetisi bentuk geometris berulang yang teratur' },
      { id: 'B', text: 'Penyusunan acak asimetris' },
      { id: 'C', text: 'Gradasi warna pelangi menyala' },
      { id: 'D', text: 'Garis abstrak tanpa bentuk dasar' },
    ],
    correctAnswer: 'A',
    explanation:
      'Motif Batik Kawung adalah contoh klasik penerapan ritme repetisi beraturan dalam warisan budaya seni rupa Indonesia. Pola dasarnya berupa empat bulatan elips yang diulang secara sistematis baik vertikal, horizontal, maupun diagonal.',
  },

  // --- SOAL 11 (PG) ---
  {
    id: 11,
    type: 'pg',
    topic: 'Eksplorasi Ritme pada Motif Batik Parang',
    difficulty: 'Sedang',
    text: 'Perhatikan alur garis pada motif Batik Parang di atas!\nCiri khas motif Batik Parang adalah susunan garis lengkung berbentuk huruf "S" atau ombak yang disusun miring berulang secara diagonal tanpa terputus. Kesan visual yang ditimbulkan oleh ritme diagonal tersebut adalah...',
    image: `<svg viewBox="0 0 420 120" xmlns="http://www.w3.org/2000/svg" class="w-full max-w-md mx-auto">
      <rect width="420" height="120" rx="12" fill="#F8FAFC" stroke="#E2E8F0" stroke-width="1.5"/>
      <g transform="translate(60, 20)">
        <path d="M 20 70 L 60 10 M 70 70 L 110 10 M 120 70 L 160 10 M 170 70 L 210 10 M 220 70 L 260 10 M 270 70 L 310 10" 
              stroke="#92400E" stroke-width="4" stroke-linecap="round"/>
        <path d="M 35 50 Q 45 40 55 45 M 85 50 Q 95 40 105 45 M 135 50 Q 145 40 155 45 M 185 50 Q 195 40 205 45 M 235 50 Q 245 40 255 45" 
              stroke="#D97706" stroke-width="3" fill="none"/>
      </g>
      <text x="210" y="108" fill="#78350F" font-size="11" font-weight="bold" text-anchor="middle">Motif Batik Parang: Ritme garis diagonal berulang melambangkan semangat dinamis</text>
    </svg>`,
    options: [
      { id: 'A', text: 'Kesan kaku, diam, dan pasif' },
      { id: 'B', text: 'Kesan dinamis, bersemangat, dan tidak mudah menyerah' },
      { id: 'C', text: 'Kesan gelap gulita dan menyeramkan' },
      { id: 'D', text: 'Kesan lambat dan membingungkan' },
    ],
    correctAnswer: 'B',
    explanation:
      'Ritme diagonal pada motif Batik Parang menyerupai ombak karang yang terus menerus bergerak tanpa henti. Ritme ini memberikan kesan gerak visual yang dinamis, kuat, berkesinambungan, dan penuh energi semangat pantang menyerah.',
  },

  // --- SOAL 12 (PG) ---
  {
    id: 12,
    type: 'pg',
    topic: 'Objek Sekitar: Pagar Kayu Rumah',
    difficulty: 'Mudah',
    text: 'Perhatikan gambar pagar rumah di atas!\nBilah-bilah kayu pagar yang dipasang tegak lurus dengan tinggi dan jarak renggang yang seragam merupakan contoh eksplorasi ritme di lingkungan sekitar dengan memanfaatkan unsur...',
    image: `<svg viewBox="0 0 420 120" xmlns="http://www.w3.org/2000/svg" class="w-full max-w-md mx-auto">
      <rect width="420" height="120" rx="12" fill="#F8FAFC" stroke="#E2E8F0" stroke-width="1.5"/>
      <g transform="translate(60, 20)">
        <!-- Palang Horizontal -->
        <rect x="0" y="22" width="300" height="8" rx="2" fill="#78350F"/>
        <rect x="0" y="48" width="300" height="8" rx="2" fill="#78350F"/>
        <!-- Bilah Vertikal -->
        <g fill="#B45309" stroke="#78350F" stroke-width="1">
          <path d="M 20 5 L 30 0 L 40 5 L 40 70 L 20 70 Z"/>
          <path d="M 60 5 L 70 0 L 80 5 L 80 70 L 60 70 Z"/>
          <path d="M 100 5 L 110 0 L 120 5 L 120 70 L 100 70 Z"/>
          <path d="M 140 5 L 150 0 L 160 5 L 160 70 L 140 70 Z"/>
          <path d="M 180 5 L 190 0 L 200 5 L 200 70 L 180 70 Z"/>
          <path d="M 220 5 L 230 0 L 240 5 L 240 70 L 220 70 Z"/>
          <path d="M 260 5 L 270 0 L 280 5 L 280 70 L 260 70 Z"/>
        </g>
      </g>
      <text x="210" y="108" fill="#451A03" font-size="11" font-weight="bold" text-anchor="middle">Pengulangan bilah garis vertikal dengan jarak renggang (interval) teratur</text>
    </svg>`,
    options: [
      { id: 'A', text: 'Pengulangan garis vertikal tegak dengan jarak (interval) teratur' },
      { id: 'B', text: 'Garis lengkung lingkaran bebas' },
      { id: 'C', text: 'Warna pelangi gradasi menyala' },
      { id: 'D', text: 'Bercak cat semprot acak' },
    ],
    correctAnswer: 'A',
    explanation:
      'Pagar kayu rumah merupakan contoh arsitektur lingkungan buatan sekitar kita yang menerapkan ritme repetisi garis vertikal dengan interval (jarak selang) yang tetap dan teratur.',
  },

  // --- SOAL 13 (PG) ---
  {
    id: 13,
    type: 'pg',
    topic: 'Objek Alam: Terasering Persawahan',
    difficulty: 'Sedang',
    text: 'Perhatikan pemandangan persawahan terasering (subak) pada gambar di atas!\nPematang sawah berundak-undak yang mengikuti kontur lereng bukit dari atas ke bawah menghasilkan ritme...',
    image: `<svg viewBox="0 0 420 120" xmlns="http://www.w3.org/2000/svg" class="w-full max-w-md mx-auto">
      <rect width="420" height="120" rx="12" fill="#F8FAFC" stroke="#E2E8F0" stroke-width="1.5"/>
      <g transform="translate(30, 15)">
        <path d="M 10 15 Q 180 5 350 20 L 350 35 Q 180 20 10 30 Z" fill="#22C55E" stroke="#15803D" stroke-width="1.5"/>
        <path d="M 10 30 Q 180 20 350 35 L 350 55 Q 180 38 10 50 Z" fill="#16A34A" stroke="#15803D" stroke-width="1.5"/>
        <path d="M 10 50 Q 180 38 350 55 L 350 78 Q 180 60 10 72 Z" fill="#15803D" stroke="#14532D" stroke-width="1.5"/>
      </g>
      <text x="210" y="108" fill="#14532D" font-size="11" font-weight="bold" text-anchor="middle">Undakan terasering bertingkat dengan garis lengkung alami berulang</text>
    </svg>`,
    options: [
      { id: 'A', text: 'Ritme bertingkat (berundak) dengan garis lengkung alami' },
      { id: 'B', text: 'Ritme kotak-kotak catur kaku' },
      { id: 'C', text: 'Ritme lingkaran titik-titik' },
      { id: 'D', text: 'Pola garis putus-putus acak' },
    ],
    correctAnswer: 'A',
    explanation:
      'Sawah terasering di lereng perbukitan (seperti di Bali) membentuk ritme berundak (bertingkat) alami dengan garis lengkung mengikuti kontur tanah. Pengulangan teras sawah ini menghasilkan pemandangan ritmis yang sangat asri dan harmonis.',
  },

  // --- SOAL 14 (PG) ---
  {
    id: 14,
    type: 'pg',
    topic: 'Objek Alam: Sarang Lebah (Heksagonal)',
    difficulty: 'Mudah',
    text: 'Perhatikan gambar sarang lebah madu (honeycomb) di atas!\nRuang-ruang sarang lebah tersusun dari bentuk bidang beraturan yang berulang saling mengunci. Bentuk bidang geometris apakah yang membentuk ritme pada sarang lebah tersebut?',
    image: `<svg viewBox="0 0 420 120" xmlns="http://www.w3.org/2000/svg" class="w-full max-w-md mx-auto">
      <rect width="420" height="120" rx="12" fill="#F8FAFC" stroke="#E2E8F0" stroke-width="1.5"/>
      <g transform="translate(100, 20)" stroke="#B45309" stroke-width="2" fill="#FDE68A">
        <!-- Row 1 -->
        <polygon points="30,5 45,5 52,18 45,31 30,31 23,18"/>
        <polygon points="60,5 75,5 82,18 75,31 60,31 53,18"/>
        <polygon points="90,5 105,5 112,18 105,31 90,31 83,18"/>
        <polygon points="120,5 135,5 142,18 135,31 120,31 113,18"/>
        <!-- Row 2 -->
        <polygon points="45,31 60,31 67,44 60,57 45,57 38,44"/>
        <polygon points="75,31 90,31 97,44 90,57 75,57 68,44"/>
        <polygon points="105,31 120,31 127,44 120,57 105,57 98,44"/>
        <polygon points="135,31 150,31 157,44 150,57 135,57 128,44"/>
        <!-- Row 3 -->
        <polygon points="60,57 75,57 82,70 75,83 60,83 53,70"/>
        <polygon points="90,57 105,57 112,70 105,83 90,83 83,70"/>
        <polygon points="120,57 135,57 142,70 135,83 120,83 113,70"/>
      </g>
      <text x="210" y="110" fill="#92400E" font-size="11" font-weight="bold" text-anchor="middle">Sarang Lebah Madu: Ritme repetisi bidang segi enam (heksagonal)</text>
    </svg>`,
    options: [
      { id: 'A', text: 'Segi empat bujur sangkar' },
      { id: 'B', text: 'Segi enam beraturan (Heksagon)' },
      { id: 'C', text: 'Segi tiga sama sisi' },
      { id: 'D', text: 'Lingkaran penuh' },
    ],
    correctAnswer: 'B',
    explanation:
      'Sarang lebah madu secara menakjubkan tersusun dari bidang segi enam (heksagonal) yang berulang secara rapat dan sempurna tanpa menyisakan celah kosong. Ini adalah contoh ritme tessellation (pengubinan berulang) alami.',
  },

  // --- SOAL 15 (PG) ---
  {
    id: 15,
    type: 'pg',
    topic: 'Ritme Transisi / Gradasi Warna',
    difficulty: 'Sedang',
    text: 'Perhatikan gradasi warna pada balok gambar di atas!\nPerubahan tingkat kecerahan warna yang disusun berurutan dari warna sangat gelap ke warna sangat terang menghasilkan ritme...',
    image: `<svg viewBox="0 0 420 120" xmlns="http://www.w3.org/2000/svg" class="w-full max-w-md mx-auto">
      <rect width="420" height="120" rx="12" fill="#F8FAFC" stroke="#E2E8F0" stroke-width="1.5"/>
      <g transform="translate(45, 35)">
        <rect x="0" y="0" width="60" height="42" fill="#1E3A8A" rx="4"/>
        <rect x="65" y="0" width="60" height="42" fill="#1D4ED8" rx="4"/>
        <rect x="130" y="0" width="60" height="42" fill="#3B82F6" rx="4"/>
        <rect x="195" y="0" width="60" height="42" fill="#60A5FA" rx="4"/>
        <rect x="260" y="0" width="60" height="42" fill="#BFDBFE" rx="4"/>
      </g>
      <text x="210" y="106" fill="#1D4ED8" font-size="11" font-weight="bold" text-anchor="middle">Biru Sangat Tua ➔ Biru Tua ➔ Biru Sedang ➔ Biru Muda ➔ Biru Sangat Muda</text>
    </svg>`,
    options: [
      { id: 'A', text: 'Ritme gradasi / transisi warna (value/kepekatan warna)' },
      { id: 'B', text: 'Ritme kontras saling bertabrakan' },
      { id: 'C', text: 'Ritme acak tak beraturan' },
      { id: 'D', text: 'Pewarnaan monokrom kusam' },
    ],
    correctAnswer: 'A',
    explanation:
      'Ritme tidak hanya diterapkan pada bentuk garis dan ukuran, tetapi juga pada warna. Gradasi warna dari gelap ke terang (atau dari satu nada warna ke nada warna lain secara halus) menciptakan ritme transisi warna yang sedap dipandang mata.',
  },

  // --- SOAL 16 (PG) ---
  {
    id: 16,
    type: 'pg',
    topic: 'Eksplorasi Ritme pada Kulit Binatang Zebra',
    difficulty: 'Mudah',
    text: 'Perhatikan corak loreng pada tubuh zebra di atas!\nCorak belang zebra memperlihatkan pengulangan garis-garis lengkung dengan kombinasi dua warna yang saling kontras, yaitu...',
    image: `<svg viewBox="0 0 420 120" xmlns="http://www.w3.org/2000/svg" class="w-full max-w-md mx-auto">
      <rect width="420" height="120" rx="12" fill="#F8FAFC" stroke="#E2E8F0" stroke-width="1.5"/>
      <g transform="translate(60, 25)">
        <rect x="0" y="0" width="300" height="55" rx="8" fill="#FFFFFF" stroke="#0F172A" stroke-width="2"/>
        <!-- Loreng Hitam Zebra -->
        <path d="M 25 0 Q 30 25 20 55 L 35 55 Q 45 25 38 0 Z" fill="#0F172A"/>
        <path d="M 65 0 Q 80 30 70 55 L 85 55 Q 95 30 80 0 Z" fill="#0F172A"/>
        <path d="M 115 0 Q 120 25 110 55 L 128 55 Q 138 25 130 0 Z" fill="#0F172A"/>
        <path d="M 160 0 Q 175 30 165 55 L 180 55 Q 190 30 175 0 Z" fill="#0F172A"/>
        <path d="M 210 0 Q 220 25 210 55 L 225 55 Q 235 25 225 0 Z" fill="#0F172A"/>
        <path d="M 255 0 Q 270 30 260 55 L 275 55 Q 285 30 270 0 Z" fill="#0F172A"/>
      </g>
      <text x="210" y="106" fill="#0F172A" font-size="11" font-weight="bold" text-anchor="middle">Garis loreng hitam-putih berselang-seling pada bulu zebra</text>
    </svg>`,
    options: [
      { id: 'A', text: 'Hitam dan putih (ritme alternasi garis dinamis)' },
      { id: 'B', text: 'Merah dan kuning cerah' },
      { id: 'C', text: 'Hijau dan biru laut' },
      { id: 'D', text: 'Cokelat muda dan keemasan' },
    ],
    correctAnswer: 'A',
    explanation:
      'Loreng pada zebra merupakan contoh ritme alternasi alami garis hitam dan putih yang mengalir secara lentur menyesuaikan bentuk lekuk tubuh hewan tersebut.',
  },

  // --- SOAL 17 (PG) ---
  {
    id: 17,
    type: 'pg',
    topic: 'Kerajinan Anyaman Tradisional (Pola Anyaman)',
    difficulty: 'Mudah',
    text: 'Perhatikan gambar pola anyaman bambu/rotan di atas!\nBilah bambu yang disusupkan secara bergantian: "satu di atas - satu di bawah" (tindih-menindih selang-seling) merupakan penerapan ritme...',
    image: `<svg viewBox="0 0 420 120" xmlns="http://www.w3.org/2000/svg" class="w-full max-w-md mx-auto">
      <rect width="420" height="120" rx="12" fill="#F8FAFC" stroke="#E2E8F0" stroke-width="1.5"/>
      <g transform="translate(130, 20)">
        <rect x="0" y="0" width="30" height="30" fill="#D97706" stroke="#92400E"/>
        <rect x="30" y="0" width="30" height="30" fill="#FDE68A" stroke="#92400E"/>
        <rect x="60" y="0" width="30" height="30" fill="#D97706" stroke="#92400E"/>
        <rect x="90" y="0" width="30" height="30" fill="#FDE68A" stroke="#92400E"/>
        <rect x="120" y="0" width="30" height="30" fill="#D97706" stroke="#92400E"/>

        <rect x="0" y="30" width="30" height="30" fill="#FDE68A" stroke="#92400E"/>
        <rect x="30" y="30" width="30" height="30" fill="#D97706" stroke="#92400E"/>
        <rect x="60" y="30" width="30" height="30" fill="#FDE68A" stroke="#92400E"/>
        <rect x="90" y="30" width="30" height="30" fill="#D97706" stroke="#92400E"/>
        <rect x="120" y="30" width="30" height="30" fill="#FDE68A" stroke="#92400E"/>
      </g>
      <text x="210" y="106" fill="#78350F" font-size="11" font-weight="bold" text-anchor="middle">Pola Anyaman: Bilah selang-seling saling mengunci membentuk ritme beraturan</text>
    </svg>`,
    options: [
      { id: 'A', text: 'Alternasi (selang-seling tindih menindih)' },
      { id: 'B', text: 'Gradasi mengecil bertahap' },
      { id: 'C', text: 'Garis spiral memutar' },
      { id: 'D', text: 'Titik menyebar tanpa arah' },
    ],
    correctAnswer: 'A',
    explanation:
      'Pola anyaman bambu sasag atau kepang menerapkan ritme alternasi (selang-seling), di mana bilah horizontal dan vertikal saling menyilang atas-bawah secara bergantian dan teratur.',
  },

  // --- SOAL 18 (PG) ---
  {
    id: 18,
    type: 'pg',
    topic: 'Unsur-unsur Pembentuk Ritme',
    difficulty: 'Mudah',
    text: 'Di bawah ini yang merupakan unsur-unsur visual dalam seni rupa yang dapat disusun untuk menciptakan ritme adalah...',
    options: [
      { id: 'A', text: 'Garis, bidang, bentuk, warna, dan tekstur' },
      { id: 'B', text: 'Tempo nada, melodi, dan birama' },
      { id: 'C', text: 'Kata, bait, dan rima sajak' },
      { id: 'D', text: 'Kecepatan, massa, dan gravitasi' },
    ],
    correctAnswer: 'A',
    explanation:
      'Unsur-unsur fisik pembentuk karya seni rupa dua dimensi yang dapat diulang untuk menciptakan ritme rupa adalah garis, bidang, bentuk, warna, gelap-terang (nada/value), dan tekstur.',
  },

  // --- SOAL 19 (PG) ---
  {
    id: 19,
    type: 'pg',
    topic: 'Konsep Interval (Jarak Antar-Objek)',
    difficulty: 'Sedang',
    text: 'Perhatikan perbandingan baris A dan baris B pada gambar di atas!\nPada baris A, jarak (interval) antar-objek dibuat sama dan rapi sehingga menghasilkan ritme yang selaras. Apa yang dimaksud dengan "interval" dalam menggambar pola ritme?',
    image: `<svg viewBox="0 0 420 120" xmlns="http://www.w3.org/2000/svg" class="w-full max-w-md mx-auto">
      <rect width="420" height="120" rx="12" fill="#F8FAFC" stroke="#E2E8F0" stroke-width="1.5"/>
      <g transform="translate(30, 15)">
        <text x="10" y="24" fill="#1D4ED8" font-size="11" font-weight="bold">Baris A (Teratur):</text>
        <circle cx="120" cy="20" r="12" fill="#2563EB"/>
        <circle cx="170" cy="20" r="12" fill="#2563EB"/>
        <circle cx="220" cy="20" r="12" fill="#2563EB"/>
        <circle cx="270" cy="20" r="12" fill="#2563EB"/>
        <circle cx="320" cy="20" r="12" fill="#2563EB"/>
      </g>
      <g transform="translate(30, 52)">
        <text x="10" y="24" fill="#DC2626" font-size="11" font-weight="bold">Baris B (Acak):</text>
        <circle cx="110" cy="20" r="12" fill="#EF4444"/>
        <circle cx="135" cy="20" r="12" fill="#EF4444"/>
        <circle cx="210" cy="20" r="12" fill="#EF4444"/>
        <circle cx="240" cy="20" r="12" fill="#EF4444"/>
        <circle cx="330" cy="20" r="12" fill="#EF4444"/>
      </g>
      <text x="210" y="108" fill="#475569" font-size="11" text-anchor="middle">Jarak selang (ruang kosong antar objek) menentukan keharmonisan ritme</text>
    </svg>`,
    options: [
      { id: 'A', text: 'Tebal tipisnya kertas gambar yang digunakan' },
      { id: 'B', text: 'Jarak jeda atau ruang kosong di antara objek-objek yang diulang' },
      { id: 'C', text: 'Nama merk cat air atau krayon' },
      { id: 'D', text: 'Waktu yang dihabiskan untuk menyelesaikan gambar' },
    ],
    correctAnswer: 'B',
    explanation:
      'Interval dalam seni rupa adalah ruang kosong atau jarak jeda antara satu unsur visual dengan unsur visual berikutnya. Keteraturan interval sangat menentukan keharmonisan dan kerapian ritme yang dihasilkan.',
  },

  // --- SOAL 20 (PG) ---
  {
    id: 20,
    type: 'pg',
    topic: 'Ritme Radiasi (Memancar)',
    difficulty: 'Sedang',
    text: 'Perhatikan gambar bunga matahari di atas!\nKelopak-kelopak bunga yang tersusun melingkar dan memancar keluar dari satu titik pusat tengah menerapkan jenis ritme...',
    image: `<svg viewBox="0 0 420 120" xmlns="http://www.w3.org/2000/svg" class="w-full max-w-md mx-auto">
      <rect width="420" height="120" rx="12" fill="#F8FAFC" stroke="#E2E8F0" stroke-width="1.5"/>
      <g transform="translate(160, 10)">
        <!-- Kelopak Memancar -->
        <g fill="#FBBF24" stroke="#D97706" stroke-width="1">
          <ellipse cx="50" cy="15" rx="7" ry="16"/>
          <ellipse cx="50" cy="75" rx="7" ry="16"/>
          <ellipse cx="20" cy="45" rx="16" ry="7"/>
          <ellipse cx="80" cy="45" rx="16" ry="7"/>
          <g transform="rotate(45, 50, 45)">
            <ellipse cx="50" cy="15" rx="7" ry="16"/>
            <ellipse cx="50" cy="75" rx="7" ry="16"/>
            <ellipse cx="20" cy="45" rx="16" ry="7"/>
            <ellipse cx="80" cy="45" rx="16" ry="7"/>
          </g>
        </g>
        <!-- Pusat Bunga Lingkaran -->
        <circle cx="50" cy="45" r="18" fill="#78350F" stroke="#451A03" stroke-width="2"/>
      </g>
      <text x="210" y="108" fill="#92400E" font-size="11" font-weight="bold" text-anchor="middle">Ritme Radiasi: Unsur rupa memancar keluar dari satu titik sumbu pusat</text>
    </svg>`,
    options: [
      { id: 'A', text: 'Ritme Radiasi atau Pancaran (Radial Rhythm)' },
      { id: 'B', text: 'Ritme garis lurus horizontal' },
      { id: 'C', text: 'Ritme patah-patah vertikal' },
      { id: 'D', text: 'Ritme acak tidak berpola' },
    ],
    correctAnswer: 'A',
    explanation:
      'Ritme Radiasi (Radial Rhythm) adalah jenis ritme di mana unsur-unsur rupa (seperti kelopak bunga matahari, roda sepeda, atau pancaran sinar matahari) tersusun mengelilingi satu titik sumbu pusat dan memancar ke segala arah.',
  },

  // --- SOAL 21 (PG) ---
  {
    id: 21,
    type: 'pg',
    topic: 'Langkah Menggambar: Motif Dasar (Unit of Design)',
    difficulty: 'Mudah',
    text: 'Sebelum menggambar pola berulang yang rapi pada kertas gambar, langkah awal yang paling penting dilakukan adalah...',
    options: [
      { id: 'A', text: 'Langsung mewarnai seluruh kertas gambar dengan cat air pekat' },
      { id: 'B', text: 'Menentukan dan merancang satu bentuk motif dasar (elemen pokok) terlebih dahulu' },
      { id: 'C', text: 'Menggunting kertas gambar menjadi potongan kecil' },
      { id: 'D', text: 'Menghapus seluruh bingkai tepi kertas gambar' },
    ],
    correctAnswer: 'B',
    explanation:
      'Langkah awal dalam menggambar menggunakan prinsip ritme adalah menentukan motif dasar (unit motif/unit of design). Motif dasar inilah yang nantinya akan digandakan atau diulang-ulang sesuai jenis ritme yang dipilih (repetisi, alternasi, atau gradasi).',
  },

  // --- SOAL 22 (PG) ---
  {
    id: 22,
    type: 'pg',
    topic: 'Fungsi Ritme dalam Karya Seni Rupa',
    difficulty: 'Mudah',
    text: 'Mengapa prinsip ritme sangat penting diterapkan saat menggambar karya seni rupa?',
    options: [
      { id: 'A', text: 'Agar gambar terlihat membosankan dan kaku' },
      { id: 'B', text: 'Untuk membimbing pandangan mata penikmat seni sehingga merasakan alunan gerak yang harmonis' },
      { id: 'C', text: 'Supaya gambar menghabiskan banyak tinta spidol' },
      { id: 'D', text: 'Agar warna gambar menjadi gelap dan tak terlihat' },
    ],
    correctAnswer: 'B',
    explanation:
      'Prinsip ritme berguna untuk memandu arah pandang mata pemirsa mengalir secara nyaman dari satu bagian gambar ke bagian gambar lainnya, sehingga karya seni terasa hidup, tidak monoton, dan memiliki daya tarik visual yang kuat.',
  },

  // --- SOAL 23 (PG) ---
  {
    id: 23,
    type: 'pg',
    topic: 'Mengatasi Rasa Monoton pada Ritme Repetisi',
    difficulty: 'Sedang',
    text: 'Jika seorang siswa mengulang bentuk kotak yang sama persis sebanyak 50 kali di kertas gambar, gambarnya mungkin terasa monoton (membosankan). Cara kreatif untuk memberi variasi tanpa menghilangkan keteraturan ritme adalah...',
    options: [
      { id: 'A', text: 'Mencoret-coret kertas hingga robek' },
      { id: 'B', text: 'Menerapkan variasi warna selang-seling atau gradasi ukuran secara teratur' },
      { id: 'C', text: 'Menghapus separuh gambar secara acak' },
      { id: 'D', text: 'Mengganti semua kotak dengan coretan benang kusut' },
    ],
    correctAnswer: 'B',
    explanation:
      'Agar ritme pengulangan tidak terkesan membosankan atau kaku, kita dapat menambahkan variasi terencana, misalnya dengan memberikan warna selang-seling (alternasi), gradasi warna, atau memodifikasi ukuran secara bertahap.',
  },

  // --- SOAL 24 (PG) ---
  {
    id: 24,
    type: 'pg',
    topic: 'Objek Sekitar: Susunan Batu Bata Dinding',
    difficulty: 'Sedang',
    text: 'Perhatikan susunan batu bata dinding bangunan pada gambar di atas!\nBatu bata pada baris atas diletakkan tepat di tengah persambungan dua batu bata baris bawahnya (selang-seling setengah bata). Pola ini menghasilkan ritme yang bertujuan untuk...',
    image: `<svg viewBox="0 0 420 120" xmlns="http://www.w3.org/2000/svg" class="w-full max-w-md mx-auto">
      <rect width="420" height="120" rx="12" fill="#F8FAFC" stroke="#E2E8F0" stroke-width="1.5"/>
      <g transform="translate(60, 20)" stroke="#7C2D12" stroke-width="1.5" fill="#EA580C">
        <!-- Row 1 -->
        <rect x="0" y="0" width="60" height="18" rx="2"/>
        <rect x="65" y="0" width="60" height="18" rx="2"/>
        <rect x="130" y="0" width="60" height="18" rx="2"/>
        <rect x="195" y="0" width="60" height="18" rx="2"/>
        <rect x="260" y="0" width="40" height="18" rx="2"/>
        <!-- Row 2 -->
        <rect x="0" y="22" width="30" height="18" rx="2"/>
        <rect x="35" y="22" width="60" height="18" rx="2"/>
        <rect x="100" y="22" width="60" height="18" rx="2"/>
        <rect x="165" y="22" width="60" height="18" rx="2"/>
        <rect x="230" y="22" width="60" height="18" rx="2"/>
        <!-- Row 3 -->
        <rect x="0" y="44" width="60" height="18" rx="2"/>
        <rect x="65" y="44" width="60" height="18" rx="2"/>
        <rect x="130" y="44" width="60" height="18" rx="2"/>
        <rect x="195" y="44" width="60" height="18" rx="2"/>
        <rect x="260" y="44" width="40" height="18" rx="2"/>
      </g>
      <text x="210" y="108" fill="#9A3412" font-size="11" font-weight="bold" text-anchor="middle">Susunan bata selang-seling (staggered) memperkokoh dinding sekaligus berestetika</text>
    </svg>`,
    options: [
      { id: 'A', text: 'Memberikan kekuatan struktur bangunan sekaligus menciptakan ritme visual selang-seling yang kokoh' },
      { id: 'B', text: 'Menghabiskan semen perekat lebih banyak' },
      { id: 'C', text: 'Membuat dinding mudah retak dan roboh' },
      { id: 'D', text: 'Menyulitkan tukang memasang batu bata' },
    ],
    correctAnswer: 'A',
    explanation:
      'Susunan batu bata dinding (running bond pattern) disusun berselang-seling setengah bata. Selain memberikan kekuatan saling mengikat antar-bata, susunan ini menampilkan ritme geometris horizontal yang sangat stabil dan estetis.',
  },

  // --- SOAL 25 (PG) ---
  {
    id: 25,
    type: 'pg',
    topic: 'Objek Sekitar: Kisi-Kisi Ventilasi Udara',
    difficulty: 'Mudah',
    text: 'Kisi-kisi lubang angin (ventilasi udara) di atas pintu kelas yang dibuat dengan lubang persegi panjang berulang dengan ukuran seragam menerapkan prinsip...',
    options: [
      { id: 'A', text: 'Ritme repetisi bentuk bidang geometris' },
      { id: 'B', text: 'Warna komplementer berlawanan' },
      { id: 'C', text: 'Sketsa pemandangan alam bebas' },
      { id: 'D', text: 'Distorsi bentuk makhluk hidup' },
    ],
    correctAnswer: 'A',
    explanation:
      'Kisi-kisi ventilasi udara atau roster pada bangunan dibuat dengan mengulang bentuk bidang geometris yang sama secara berkala, yang merupakan aplikasi praktis ritme repetisi.',
  },

  // --- SOAL 26 (PG) ---
  {
    id: 26,
    type: 'pg',
    topic: 'Eksplorasi Alam: Kelopak Bunga Mawar',
    difficulty: 'Sedang',
    text: 'Kelopak bunga mawar mekar dari kuncup yang padat di tengah, kemudian helai-helai kelopak di luarnya semakin melebar dan melengkung keluar secara bertahap. Fenomena keindahan bunga ini menunjukkan kombinasi ritme...',
    options: [
      { id: 'A', text: 'Ritme transisi ukuran dan ritme melingkar (spiral)' },
      { id: 'B', text: 'Ritme garis lurus patah-patah' },
      { id: 'C', text: 'Ritme persegi empat kaku' },
      { id: 'D', text: 'Ritme acak tidak bersambung' },
    ],
    correctAnswer: 'A',
    explanation:
      'Susunan kelopak bunga mawar berputar melingkar (spiral) sekaligus mengalami transisi ukuran (dari kelopak kecil di dalam menuju kelopak lebar di lapisan luar).',
  },

  // --- SOAL 27 (PG) ---
  {
    id: 27,
    type: 'pg',
    topic: 'Alat dan Media Menggambar Pola Beritme',
    difficulty: 'Mudah',
    text: 'Budi ingin menggambar motif hias berulang berupa deretan garis vertikal dan kotak-kotak berjarak presisi di buku gambarnya. Alat bantu gambar yang paling tepat digunakan Budi untuk menjaga kerapian jarak adalah...',
    options: [
      { id: 'A', text: 'Penggaris ukur berskala sentimeter' },
      { id: 'B', text: 'Kuas lukis ukuran sangat besar' },
      { id: 'C', text: 'Palu dan paku dinding' },
      { id: 'D', text: 'Gunting kertas bergerigi' },
    ],
    correctAnswer: 'A',
    explanation:
      'Penggaris ukur sangat membantu dalam membuat garis lurus dan mengukur jarak jeda (interval) yang tepat dan seragam agar ritme geometris yang digambar menjadi rapi dan presisi.',
  },

  // --- SOAL 28 (PG) ---
  {
    id: 28,
    type: 'pg',
    topic: 'Perbedaan Ritme Seni Rupa dan Seni Musik',
    difficulty: 'Mudah',
    text: 'Meskipun sama-sama memiliki istilah "ritme" atau "irama", perbedaan utama antara ritme dalam seni musik dan ritme dalam seni rupa adalah...',
    options: [
      { id: 'A', text: 'Ritme musik dinikmati melalui indra pendengaran (telinga), sedangkan ritme seni rupa dinikmati melalui indra penglihatan (mata)' },
      { id: 'B', text: 'Ritme musik menggunakan kertas, sedangkan ritme seni rupa menggunakan terompet' },
      { id: 'C', text: 'Ritme musik tidak memiliki ketukan teratur' },
      { id: 'D', text: 'Ritme seni rupa hanya boleh dinikmati sambil bernyanyi keras' },
    ],
    correctAnswer: 'A',
    explanation:
      'Ritme musik berupa ketukan tempo suara yang didengar oleh telinga, sedangkan ritme seni rupa berupa pengulangan unsur-unsur rupa visual (garis, bentuk, warna) yang dilihat dan dirasakan oleh indra penglihatan.',
  },

  // --- SOAL 29 (PG) ---
  {
    id: 29,
    type: 'pg',
    topic: 'Objek Sekitar: Susunan Genteng Atap Rumah',
    difficulty: 'Sedang',
    text: 'Ketika kita mengamati atap rumah dari kejauhan, lembaran genteng tersusun bertumpuk rapi dari bawah ke atas. Pengulangan deretan genteng ini menciptakan kesan visual...',
    options: [
      { id: 'A', text: 'Ritme bidang berundak yang teratur dan memberi kesan perlindungan rapi' },
      { id: 'B', text: 'Kekacauan yang membuat pusing' },
      { id: 'C', text: 'Bidang datar tanpa tekstur apapun' },
      { id: 'D', text: 'Satu garis lurus tunggal' },
    ],
    correctAnswer: 'A',
    explanation:
      'Genteng rumah yang dipasang berlapis menciptakan ritme bidang berundak secara horizontal dan miring yang seragam, memperlihatkan ritme struktural pada karya arsitektur.',
  },

  // --- SOAL 30 (PG) ---
  {
    id: 30,
    type: 'pg',
    topic: 'Objek Alam: Riak Air Tetesan Hujan',
    difficulty: 'Sedang',
    text: 'Perhatikan gambar riak air pada kolam saat terkena tetesan air hujan di atas!\nLingkaran-lingkaran riak air yang bergerak melebar keluar secara teratur merupakan contoh ritme...',
    image: `<svg viewBox="0 0 420 120" xmlns="http://www.w3.org/2000/svg" class="w-full max-w-md mx-auto">
      <rect width="420" height="120" rx="12" fill="#F8FAFC" stroke="#E2E8F0" stroke-width="1.5"/>
      <g transform="translate(170, 10)">
        <ellipse cx="40" cy="45" rx="10" ry="5" fill="none" stroke="#0284C7" stroke-width="2.5"/>
        <ellipse cx="40" cy="45" rx="25" ry="13" fill="none" stroke="#0284C7" stroke-width="2"/>
        <ellipse cx="40" cy="45" rx="45" ry="23" fill="none" stroke="#38BDF8" stroke-width="1.5"/>
        <ellipse cx="40" cy="45" rx="65" ry="33" fill="none" stroke="#7DD3FC" stroke-width="1.2"/>
        <circle cx="40" cy="45" r="3" fill="#0369A1"/>
      </g>
      <text x="210" y="108" fill="#0369A1" font-size="11" font-weight="bold" text-anchor="middle">Riak air membentuk gelombang konsentris melingkar membesar keluar</text>
    </svg>`,
    options: [
      { id: 'A', text: 'Transisi pembesaran lingkaran secara konsentris (sepusat)' },
      { id: 'B', text: 'Garis patah zig-zag acak' },
      { id: 'C', text: 'Papan catur bujur sangkar' },
      { id: 'D', text: 'Garis tegak lurus kaku' },
    ],
    correctAnswer: 'A',
    explanation:
      'Tetesan air pada permukaan tenang menimbulkan gelombang lingkaran konsentris (lingkaran dengan satu titik pusat yang sama) yang semakin melebar keluar dengan jarak berirama.',
  },

  // --- SOAL 31 (PG) ---
  {
    id: 31,
    type: 'pg',
    topic: 'Keseimbangan dalam Menggambar Pola Beritme',
    difficulty: 'Sedang',
    text: 'Saat menyusun motif berulang pada kertas gambar, kita harus memperhatikan prinsip keseimbangan (balance). Mengapa keseimbangan perlu diperhatikan?',
    options: [
      { id: 'A', text: 'Agar motif gambar tersebar proporsional dan tidak terasa berat di satu sisi saja' },
      { id: 'B', text: 'Supaya gambar menjadi sangat miring dan jatuh' },
      { id: 'C', text: 'Agar gambar tidak bisa dilihat orang lain' },
      { id: 'D', text: 'Supaya tidak perlu menggunakan pensil warna' },
    ],
    correctAnswer: 'A',
    explanation:
      'Keseimbangan (balance) memastikan penyusunan motif beritme tertata secara harmonis di seluruh permukaan bidang gambar, sehingga bobot visual gambar tidak menumpuk berat di salah satu sudut.',
  },

  // --- SOAL 32 (PG) ---
  {
    id: 32,
    type: 'pg',
    topic: 'Ritme Garis Zig-Zag',
    difficulty: 'Mudah',
    text: 'Perhatikan gambar garis zig-zag di atas!\nGaris patah-patah yang berulang secara teratur seperti gerigi gergaji atau kilat petir memberikan kesan visual...',
    image: `<svg viewBox="0 0 420 120" xmlns="http://www.w3.org/2000/svg" class="w-full max-w-md mx-auto">
      <rect width="420" height="120" rx="12" fill="#F8FAFC" stroke="#E2E8F0" stroke-width="1.5"/>
      <g transform="translate(30, 30)">
        <path d="M 10 30 L 40 5 L 70 30 L 100 5 L 130 30 L 160 5 L 190 30 L 220 5 L 250 30 L 280 5 L 310 30 L 340 5" 
              fill="none" stroke="#EA580C" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
      </g>
      <text x="210" y="95" fill="#C2410C" font-size="11" font-weight="bold" text-anchor="middle">Pengulangan garis zig-zag berirama dinamis, tajam, dan energetik</text>
    </svg>`,
    options: [
      { id: 'A', text: 'Dinamis, tajam, penuh semangat, dan berenergi' },
      { id: 'B', text: 'Tenang, lemas, dan mengantuk' },
      { id: 'C', text: 'Lentur lembut seperti air mengalir' },
      { id: 'D', text: 'Kosong tanpa makna rupa' },
    ],
    correctAnswer: 'A',
    explanation:
      'Garis zig-zag memiliki sudut-sudut tajam yang berulang secara bergantian ke atas dan ke bawah. Karakter ritme garis zig-zag adalah energik, dinamis, tegas, dan memberi sensasi gerak cepat.',
  },

  // --- SOAL 33 (PG) ---
  {
    id: 33,
    type: 'pg',
    topic: 'Analisis Komposisi Gambar Siswa',
    difficulty: 'Sedang',
    text: 'Siti ingin membuat gambar bertema ritme di buku gambarnya. Namun ia menggambar bintang besar di pojok kiri, segitiga kecil acak di tengah, dan lingkaran miring tak tentu arah tanpa keteraturan jarak maupun bentuk. Kesalahan apa yang terjadi pada gambar Siti?',
    options: [
      { id: 'A', text: 'Siti belum menerapkan prinsip keteraturan dan pengulangan yang membentuk ritme' },
      { id: 'B', text: 'Siti menggunakan kertas gambar yang terlalu tebal' },
      { id: 'C', text: 'Siti menggunakan pensil gambar berkualitas bagus' },
      { id: 'D', text: 'Siti menggambar terlalu rapi dan simetris' },
    ],
    correctAnswer: 'A',
    explanation:
      'Kunci utama dari ritme adalah pengulangan unsur yang teratur dan berkesinambungan. Jika gambar hanya memuat berbagai objek yang diletakkan secara acak tanpa pola pengulangan dan tanpa keteraturan interval, maka prinsip ritme belum terwujud.',
  },

  // --- SOAL 34 (PG) ---
  {
    id: 34,
    type: 'pg',
    topic: 'Teknik Cetak Sederhana untuk Menghasilkan Ritme',
    difficulty: 'Mudah',
    text: 'Teknik mudah dan praktis yang dapat dilakukan siswa kelas 5 untuk menghasilkan motif ritme repetisi murni yang identik secara cepat adalah dengan...',
    options: [
      { id: 'A', text: 'Teknik cap atau stempel (misalnya menggunakan potongan pelepah pisang atau kentang)' },
      { id: 'B', text: 'Membakar kertas gambar di atas lilin' },
      { id: 'C', text: 'Meneteskan lem kertas tanpa arah' },
      { id: 'D', text: 'Meremas kertas gambar hingga kusut' },
    ],
    correctAnswer: 'A',
    explanation:
      'Teknik cetak tinggi sederhana (teknik cap/stempel) menggunakan penampang pelepah pisang, umbi kentang, atau karet penghapus yang diolesi pewarna sangat ideal untuk menghasilkan motif berulang dengan bentuk yang seragam dan rapi secara cepat.',
  },

  // --- SOAL 35 (PG) ---
  {
    id: 35,
    type: 'pg',
    topic: 'Prinsip Kesatuan (Unity) dalam Ritme',
    difficulty: 'Sukar',
    text: 'Karya seni rupa yang berhasil menerapkan prinsip ritme dengan baik akan menghasilkan efek "kesatuan" (unity). Maksud dari kesatuan dalam karya beritme tersebut adalah...',
    options: [
      { id: 'A', text: 'Seluruh unsur visual saling mendukung dan menyatu membentuk keselarasan yang utuh' },
      { id: 'B', text: 'Semua gambar harus diwarnai menggunakan satu warna hitam saja' },
      { id: 'C', text: 'Kertas gambar harus ditempel menjadi satu dengan meja' },
      { id: 'D', text: 'Gambar hanya boleh dilihat oleh satu orang saja' },
    ],
    correctAnswer: 'A',
    explanation:
      'Prinsip Kesatuan (Unity) tercapai saat unsur-unsur penyusun ritme (garis, bentuk, warna) tidak tampak berserakan terpisah-pisah, melainkan saling berpadu secara utuh dan harmonis membentuk kesatuan karya seni yang indah.',
  },

  // =========================================================================
  // BAGIAN II: PILIHAN GANDA KOMPLEKS KATEGORI (5 BUTIR SOAL)
  // Setiap soal memiliki 3 pernyataan yang harus direspons Benar atau Salah
  // =========================================================================

  // --- SOAL 36 (PGK Kategori) ---
  {
    id: 36,
    type: 'pgk_kategori',
    topic: 'Analisis Karakteristik Jenis-Jenis Ritme',
    difficulty: 'Sedang',
    text: 'Perhatikan bagan perbandingan jenis-jenis ritme di atas!\nTentukan apakah masing-masing pernyataan berikut BENAR atau SALAH berdasarkan karakteristik prinsip ritme dalam seni rupa!',
    image: `<svg viewBox="0 0 420 130" xmlns="http://www.w3.org/2000/svg" class="w-full max-w-md mx-auto">
      <rect width="420" height="130" rx="12" fill="#F8FAFC" stroke="#E2E8F0" stroke-width="1.5"/>
      <text x="210" y="20" fill="#0F172A" font-size="12" font-weight="bold" text-anchor="middle">PERBANDINGAN JENIS RITME VISUAL</text>
      <!-- Panel 1: Repetisi -->
      <g transform="translate(25, 34)">
        <rect x="0" y="0" width="110" height="60" rx="8" fill="#EFF6FF" stroke="#3B82F6"/>
        <text x="55" y="18" fill="#1D4ED8" font-size="10" font-weight="bold" text-anchor="middle">1. Repetisi</text>
        <circle cx="25" cy="40" r="10" fill="#3B82F6"/>
        <circle cx="55" cy="40" r="10" fill="#3B82F6"/>
        <circle cx="85" cy="40" r="10" fill="#3B82F6"/>
      </g>
      <!-- Panel 2: Alternasi -->
      <g transform="translate(155, 34)">
        <rect x="0" y="0" width="110" height="60" rx="8" fill="#FDF4FF" stroke="#A855F7"/>
        <text x="55" y="18" fill="#7E22CE" font-size="10" font-weight="bold" text-anchor="middle">2. Alternasi</text>
        <circle cx="25" cy="40" r="10" fill="#A855F7"/>
        <polygon points="55,30 65,50 45,50" fill="#F59E0B"/>
        <circle cx="85" cy="40" r="10" fill="#A855F7"/>
      </g>
      <!-- Panel 3: Gradasi -->
      <g transform="translate(285, 34)">
        <rect x="0" y="0" width="110" height="60" rx="8" fill="#ECFDF5" stroke="#10B981"/>
        <text x="55" y="18" fill="#047857" font-size="10" font-weight="bold" text-anchor="middle">3. Gradasi</text>
        <circle cx="20" cy="40" r="6" fill="#10B981"/>
        <circle cx="48" cy="40" r="10" fill="#10B981"/>
        <circle cx="84" cy="40" r="15" fill="#10B981"/>
      </g>
      <text x="210" y="115" fill="#64748B" font-size="10" text-anchor="middle">Bentuk sama persis vs Selang-seling vs Perubahan bertahap</text>
    </svg>`,
    statements: [
      {
        id: 's1',
        text: 'Ritme repetisi adalah pengulangan motif dengan bentuk, ukuran, dan jarak yang persis sama tanpa adanya perubahan.',
        correctAnswer: true,
      },
      {
        id: 's2',
        text: 'Ritme alternasi (selang-seling) hanya boleh menggunakan satu macam bentuk saja dan dilarang mengubah warna.',
        correctAnswer: false,
      },
      {
        id: 's3',
        text: 'Ritme gradasi (transisi) memperlihatkan perubahan bertahap secara teratur, misalnya dari ukuran kecil berangsur-angsur menjadi besar.',
        correctAnswer: true,
      },
    ],
    explanation:
      'Pernyataan 1 BENAR: Ritme repetisi murni menjaga bentuk, ukuran, dan jarak tetap sama.\nPernyataan 2 SALAH: Ritme alternasi justru mengulang dua atau lebih bentuk/warna yang berbeda secara berselang-seling (A-B-A-B).\nPernyataan 3 BENAR: Ritme gradasi/transisi ditandai dengan perubahan bertahap dari kecil ke besar atau terang ke gelap.',
  },

  // --- SOAL 37 (PGK Kategori) ---
  {
    id: 37,
    type: 'pgk_kategori',
    topic: 'Eksplorasi Ritme pada Objek Alam Sekitar',
    difficulty: 'Sedang',
    text: 'Alam di sekitar kita menyediakan beraneka ragam contoh ritme yang menakjubkan pada makhluk hidup dan bentang alam.\nTentukan apakah masing-masing pernyataan eksplorasi ritme alam berikut BENAR atau SALAH!',
    image: `<svg viewBox="0 0 420 130" xmlns="http://www.w3.org/2000/svg" class="w-full max-w-md mx-auto">
      <rect width="420" height="130" rx="12" fill="#F8FAFC" stroke="#E2E8F0" stroke-width="1.5"/>
      <g transform="translate(40, 20)">
        <!-- Ombak Laut -->
        <path d="M 0 30 Q 30 5, 60 30 T 120 30 T 180 30 T 240 30 T 300 30 T 340 30" fill="none" stroke="#0284C7" stroke-width="3"/>
        <!-- Helai Daun Pakis -->
        <g stroke="#15803D" stroke-width="2">
          <line x1="20" y1="65" x2="320" y2="65"/>
          <line x1="50" y1="65" x2="35" y2="48"/>
          <line x1="90" y1="65" x2="75" y2="48"/>
          <line x1="130" y1="65" x2="115" y2="48"/>
          <line x1="170" y1="65" x2="155" y2="48"/>
          <line x1="210" y1="65" x2="195" y2="48"/>
          <line x1="250" y1="65" x2="235" y2="48"/>
          <line x1="290" y1="65" x2="275" y2="48"/>
        </g>
      </g>
      <text x="210" y="112" fill="#0F766E" font-size="11" font-weight="bold" text-anchor="middle">Inspirasi Ritme Alam: Gelombang laut, daun pakis, dan susunan sisik fauna</text>
    </svg>`,
    statements: [
      {
        id: 's1',
        text: 'Gelombang ombak laut di tepi pantai merupakan contoh nyata dari ritme mengalir (flowing rhythm) yang berulang dinamis.',
        correctAnswer: true,
      },
      {
        id: 's2',
        text: 'Susunan helai daun pakis di kiri-kanan tangkai tersusun acak tanpa pola keteraturan apapun.',
        correctAnswer: false,
      },
      {
        id: 's3',
        text: 'Cangkang kerang nautilus dan rumah bekicot menunjukkan contoh alami ritme transisi pembesaran bentuk spiral.',
        correctAnswer: true,
      },
    ],
    explanation:
      'Pernyataan 1 BENAR: Gelombang ombak memperlihatkan ritme garis lengkung dinamis alami.\nPernyataan 2 SALAH: Daun pakis tersusun sangat teratur di sepanjang tangkainya (ritme pengulangan garis miring berjejer).\nPernyataan 3 BENAR: Ruang cangkang kerang nautilus membesar secara berkesinambungan membentuk pola spiral teratur.',
  },

  // --- SOAL 38 (PGK Kategori) ---
  {
    id: 38,
    type: 'pgk_kategori',
    topic: 'Penerapan Ritme pada Kerajinan & Arsitektur Sekitar',
    difficulty: 'Sedang',
    text: 'Manusia memanfaatkan prinsip ritme untuk menciptakan berbagai karya kerajinan tangan tradisional dan arsitektur tempat tinggal.\nTentukan apakah masing-masing pernyataan berikut BENAR atau SALAH!',
    image: `<svg viewBox="0 0 420 120" xmlns="http://www.w3.org/2000/svg" class="w-full max-w-md mx-auto">
      <rect width="420" height="120" rx="12" fill="#F8FAFC" stroke="#E2E8F0" stroke-width="1.5"/>
      <text x="210" y="22" fill="#1E293B" font-size="12" font-weight="bold" text-anchor="middle">RITME PADA KARYA KERAJINAN & ARSITEKTUR</text>
      <g transform="translate(60, 36)">
        <!-- Motif Batik / Ornamen -->
        <rect x="0" y="0" width="50" height="50" rx="6" fill="#FEF3C7" stroke="#B45309" stroke-width="1.5"/>
        <circle cx="25" cy="25" r="14" fill="#D97706"/>
        <rect x="70" y="0" width="50" height="50" rx="6" fill="#FEF3C7" stroke="#B45309" stroke-width="1.5"/>
        <circle cx="95" cy="25" r="14" fill="#D97706"/>
        <rect x="140" y="0" width="50" height="50" rx="6" fill="#FEF3C7" stroke="#B45309" stroke-width="1.5"/>
        <circle cx="165" cy="25" r="14" fill="#D97706"/>
        <rect x="210" y="0" width="50" height="50" rx="6" fill="#FEF3C7" stroke="#B45309" stroke-width="1.5"/>
        <circle cx="235" cy="25" r="14" fill="#D97706"/>
      </g>
      <text x="210" y="106" fill="#78350F" font-size="11" text-anchor="middle">Pengulangan modul ragam hias pada kain batik dan susunan ubin arsitektur</text>
    </svg>`,
    statements: [
      {
        id: 's1',
        text: 'Motif kain Batik Parang menggunakan ritme susunan garis lengkung diagonal yang berkesinambungan tanpa putus.',
        correctAnswer: true,
      },
      {
        id: 's2',
        text: 'Anyaman tikar atau keranjang bambu menerapkan ritme selang-seling bilah secara teratur untuk saling mengunci.',
        correctAnswer: true,
      },
      {
        id: 's3',
        text: 'Pagar kayu dan susunan batu bata dinding rumah tidak memiliki keteraturan dan bukan merupakan penerapan ritme.',
        correctAnswer: false,
      },
    ],
    explanation:
      'Pernyataan 1 BENAR: Batik Parang memiliki ciri khas alur diagonal yang mengalir berkesinambungan.\nPernyataan 2 BENAR: Anyaman dibuat dengan menyilangkan bilah bambu atas-bawah berselang-seling (ritme alternasi fungsional).\nPernyataan 3 SALAH: Pagar kayu dan susunan batu bata justru merupakan contoh paling nyata penerapan ritme dalam lingkungan binaan kita.',
  },

  // --- SOAL 39 (PGK Kategori) ---
  {
    id: 39,
    type: 'pgk_kategori',
    topic: 'Prinsip dan Langkah Praktik Menggambar Pola Beritme',
    difficulty: 'Sukar',
    text: 'Perhatikan gambar teknik menggunakan garis bantu kisi-kisi (grid) di atas!\nSaat menggambar pola dengan prinsip ritme di buku gambar, siswa perlu mengikuti prosedur teknis tertentu.\nTentukan apakah pernyataan berikut BENAR atau SALAH!',
    image: `<svg viewBox="0 0 420 120" xmlns="http://www.w3.org/2000/svg" class="w-full max-w-md mx-auto">
      <rect width="420" height="120" rx="12" fill="#F8FAFC" stroke="#E2E8F0" stroke-width="1.5"/>
      <g transform="translate(100, 15)">
        <!-- Grid Garis Bantu Pensil Tipis -->
        <g stroke="#94A3B8" stroke-width="1" stroke-dasharray="3,3">
          <line x1="0" y1="10" x2="220" y2="10"/>
          <line x1="0" y1="45" x2="220" y2="45"/>
          <line x1="0" y1="80" x2="220" y2="80"/>
          <line x1="0" y1="10" x2="0" y2="80"/>
          <line x1="55" y1="10" x2="55" y2="80"/>
          <line x1="110" y1="10" x2="110" y2="80"/>
          <line x1="165" y1="10" x2="165" y2="80"/>
          <line x1="220" y1="10" x2="220" y2="80"/>
        </g>
        <!-- Motif di Dalam Grid -->
        <polygon points="27,20 47,40 27,60 7,40" fill="#3B82F6"/>
        <polygon points="82,20 102,40 82,60 62,40" fill="#3B82F6"/>
        <polygon points="137,20 157,40 137,60 117,40" fill="#3B82F6"/>
        <polygon points="192,20 212,40 192,60 172,40" fill="#3B82F6"/>
      </g>
      <text x="210" y="110" fill="#334155" font-size="11" font-weight="bold" text-anchor="middle">Penggunaan garis bantu kisi-kisi (grid) tipis menjaga ketepatan jarak dan ukuran motif</text>
    </svg>`,
    statements: [
      {
        id: 's1',
        text: 'Membuat garis bantu atau kotak-kotak tipis (grid) dengan pensil dapat mempermudah menjaga keseragaman ukuran dan jarak motif.',
        correctAnswer: true,
      },
      {
        id: 's2',
        text: 'Dalam menggambar ritme, kita bebas mengubah ukuran motif secara sembarangan tanpa aturan sama sekali.',
        correctAnswer: false,
      },
      {
        id: 's3',
        text: 'Pemberian warna secara konsisten (misalnya pola merah-kuning-merah-kuning) akan memperkuat kejelasan ritme visual karya.',
        correctAnswer: true,
      },
    ],
    explanation:
      'Pernyataan 1 BENAR: Garis bantu pensil tipis (grid) sangat berguna untuk memastikan keteraturan penempatan motif.\nPernyataan 2 SALAH: Jika ukuran diubah sembarangan tanpa aturan, keteraturan ritme akan rusak.\nPernyataan 3 BENAR: Skema warna yang berpola (alternasi atau gradasi) sangat efektif mempertegas irama visual gambar.',
  },

  // --- SOAL 40 (PGK Kategori) ---
  {
    id: 40,
    type: 'pgk_kategori',
    topic: 'Apresiasi & Penilaian Estetika Karya Beritme',
    difficulty: 'Sukar',
    text: 'Apresiasi seni rupa terhadap karya yang menerapkan prinsip ritme melibatkan pemahaman tentang keselarasan, variasi, dan dampak emosional visual.\nTentukan apakah pernyataan berikut BENAR atau SALAH!',
    image: `<svg viewBox="0 0 420 120" xmlns="http://www.w3.org/2000/svg" class="w-full max-w-md mx-auto">
      <rect width="420" height="120" rx="12" fill="#F8FAFC" stroke="#E2E8F0" stroke-width="1.5"/>
      <g transform="translate(60, 20)">
        <circle cx="40" cy="40" r="28" fill="#F43F5E"/>
        <circle cx="110" cy="40" r="24" fill="#FB7185"/>
        <circle cx="175" cy="40" r="20" fill="#FDA4AF"/>
        <circle cx="230" cy="40" r="16" fill="#FECDD3"/>
        <circle cx="275" cy="40" r="12" fill="#FFE4E6"/>
      </g>
      <text x="210" y="106" fill="#9F1239" font-size="11" font-weight="bold" text-anchor="middle">Kombinasi gradasi ukuran dan gradasi intensitas warna menciptakan kedalaman visual</text>
    </svg>`,
    statements: [
      {
        id: 's1',
        text: 'Karya gambar yang memadukan gradasi ukuran bentuk dan gradasi warna mampu memberikan kesan kedalaman ruang (tiga dimensi).',
        correctAnswer: true,
      },
      {
        id: 's2',
        text: 'Karya seni rupa yang memiliki ritme baik akan membuat mata pemirsa merasa tegang, bingung, dan lelah menatapnya.',
        correctAnswer: false,
      },
      {
        id: 's3',
        text: 'Menggambar dengan prinsip ritme melatih ketelitian, kesabaran, kepekaan spasial, dan apresiasi terhadap keindahan ciptaan Tuhan di alam sekitar.',
        correctAnswer: true,
      },
    ],
    explanation:
      'Pernyataan 1 BENAR: Objek yang semakin mengecil dan memudar warnanya menciptakan ilusi optik kedalaman ruang (perspektif udara).\nPernyataan 2 SALAH: Karya beritme yang baik justru memberikan alunan pandang yang nyaman, harmonis, dan menyenangkan bagi mata penikmatnya.\nPernyataan 3 BENAR: Pembelajaran ritme seni rupa melatih kepekaan estetika, ketelitian, dan rasa syukur atas keteraturan alam semesta.',
  },
];
