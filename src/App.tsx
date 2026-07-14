import { useState, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform, useSpring } from 'motion/react';
import { 
  ShieldCheck, 
  CheckCircle,
  Users,
  FileCheck,
  ArrowRight,
  TrendingUp,
  Lock,
  ChevronDown
} from 'lucide-react';

export default function App() {
  const [navigatingTo, setNavigatingTo] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Initialize scroll tracking
  const { scrollYProgress } = useScroll();
  
  // Spring-smoothed scroll progress for organic Apple-like inertia
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 70,
    damping: 30,
    restDelta: 0.001
  });

  // Apple-style parallax, scale, and rotation transforms
  // Hero Section parallax
  const heroScale = useTransform(smoothProgress, [0, 0.35], [1, 0.88]);
  const heroOpacity = useTransform(smoothProgress, [0, 0.3], [1, 0]);
  const heroY = useTransform(smoothProgress, [0, 0.35], [0, -50]);

  // Background Zen elements transformation
  const bgCircleScale = useTransform(smoothProgress, [0, 1], [0.85, 1.4]);
  const bgCircleRotate = useTransform(smoothProgress, [0, 1], [0, 120]);
  const bgLineY = useTransform(smoothProgress, [0, 1], [-100, 200]);

  // Cards entrance transformations (Split & Merge effect)
  // Card 1 (Staff System) slides in from the left and rotates slightly
  const card1X = useTransform(smoothProgress, [0, 0.55], [-120, 0]);
  const card1Y = useTransform(smoothProgress, [0, 0.55], [60, 0]);
  const card1Rotate = useTransform(smoothProgress, [0, 0.55], [-4, 0]);
  const card1Opacity = useTransform(smoothProgress, [0.05, 0.45], [0.3, 1]);

  // Card 2 (Insurance Hub) slides in from the right and rotates slightly
  const card2X = useTransform(smoothProgress, [0, 0.55], [120, 0]);
  const card2Y = useTransform(smoothProgress, [0, 0.55], [60, 0]);
  const card2Rotate = useTransform(smoothProgress, [0, 0.55], [4, 0]);
  const card2Opacity = useTransform(smoothProgress, [0.05, 0.45], [0.3, 1]);

  // Bottom Footer opacity control based on scroll
  const footerOpacity = useTransform(smoothProgress, [0.4, 0.8], [0.4, 1]);

  const systems = [
    {
      id: 'staff-performance',
      title: 'ระบบส่งยอดพนักงาน',
      titleEn: 'Staff Performance Tracking',
      description: 'ระบบรายงานและตรวจสอบยอดขาย ผลการปฏิบัติงานรายวันของเจ้าหน้าที่อย่างมีประสิทธิภาพ ตรวจสอบข้อมูลง่ายดายและแม่นยำ',
      url: 'https://staff-performance-tracking-db.vercel.app/',
      target: 'staff_performance_tracking_system',
      icon: Users,
      accentIcon: TrendingUp,
      badge: 'STAFF SYSTEM',
      // Muji Earthy Indigo-Slate Palette
      themeColor: 'slate',
      cardBg: 'bg-white',
      borderClass: 'border-[#eae4d9]',
      hoverBorderClass: 'hover:border-[#7c6e5e]/40',
      iconBg: 'bg-[#f4f0e6] text-[#556370]',
      titleColor: 'text-[#3c3730]',
      textColor: 'text-[#70695f]',
      badgeBg: 'bg-[#efeae0] text-[#7a6d5c]',
      btnBg: 'bg-[#556370] hover:bg-[#45525e]',
      accentLine: 'bg-[#556370]',
      styleTransforms: { x: card1X, y: card1Y, rotate: card1Rotate, opacity: card1Opacity }
    },
    {
      id: 'insurance-license',
      title: 'ระบบจัดการใบอนุญาตประกัน',
      titleEn: 'Insurance License Management',
      description: 'EasyBroker Hub ศูนย์กลางตรวจสอบสถานะ คัดกรอง และบันทึกข้อมูลใบอนุญาตนายหน้าประกันภัยอย่างเป็นระบบและปลอดภัย',
      url: 'https://staff-insurance-license.vercel.app/',
      target: 'insurance_license_system',
      icon: FileCheck,
      accentIcon: ShieldCheck,
      badge: 'EASYBROKER HUB',
      // Muji Signature Terracotta Red / Warm Clay Palette
      themeColor: 'terracotta',
      cardBg: 'bg-white',
      borderClass: 'border-[#eae4d9]',
      hoverBorderClass: 'hover:border-[#7c6e5e]/40',
      iconBg: 'bg-[#fcf5f3] text-[#9c3d3a]',
      titleColor: 'text-[#3c3730]',
      textColor: 'text-[#70695f]',
      badgeBg: 'bg-[#f5e8e6] text-[#9c3d3a]',
      btnBg: 'bg-[#9c3d3a] hover:bg-[#85322f]',
      accentLine: 'bg-[#9c3d3a]',
      styleTransforms: { x: card2X, y: card2Y, rotate: card2Rotate, opacity: card2Opacity }
    }
  ];

  const handleNavigate = (url: string, target: string, title: string) => {
    setNavigatingTo(title);
    
    // Redirect in the same window after a short feedback delay to prevent popup blocker
    setTimeout(() => {
      window.location.href = url;
    }, 850);
  };

  return (
    <div 
      ref={containerRef}
      className="min-h-[160vh] bg-[#faf8f5] text-[#3c3730] flex flex-col justify-between overflow-x-hidden relative select-none font-sans antialiased"
    >
      
      {/* Background Japanese Paper Texture & Minimalism Ornaments */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.14] z-0 bg-[radial-gradient(#8a7f72_1px,transparent_1px)] bg-[size:28px_28px]" />
      
      {/* Elegant top red geometric indicator */}
      <div className="fixed top-0 left-0 right-0 h-[3px] bg-[#9c3d3a] z-50" />

      {/* Interactive Apple-style Scroll Progress Bar */}
      <motion.div 
        className="fixed top-[3px] left-0 h-[3px] bg-[#556370] origin-left z-50"
        style={{ scaleX: smoothProgress, width: '100%' }}
      />

      {/* Floating Apple/Muji Decorative Circular Loom */}
      <motion.div 
        className="fixed top-1/4 right-[-10vw] w-[50vw] h-[50vw] max-w-[600px] max-h-[600px] border border-[#eae4d9] rounded-full pointer-events-none z-0"
        style={{ 
          scale: bgCircleScale,
          rotate: bgCircleRotate,
        }}
      />
      <motion.div 
        className="fixed top-[20%] right-[-8vw] w-[46vw] h-[46vw] max-w-[550px] max-h-[550px] border border-dashed border-[#e4dccf] rounded-full pointer-events-none z-0"
        style={{ 
          scale: bgCircleScale,
          rotate: useTransform(smoothProgress, [0, 1], [360, 0]),
        }}
      />

      {/* Vertical Japanese style geometric grid lines */}
      <motion.div 
        className="fixed left-[12vw] top-0 bottom-0 w-[1px] bg-[#eae4d9]/40 pointer-events-none z-0"
        style={{ y: bgLineY }}
      />
      <motion.div 
        className="fixed right-[12vw] top-0 bottom-0 w-[1px] bg-[#eae4d9]/40 pointer-events-none z-0"
        style={{ y: useTransform(smoothProgress, [0, 1], [100, -200]) }}
      />

      {/* Header Section (Parallax scroll-linked effect) */}
      <header className="pt-28 pb-4 px-6 md:px-16 max-w-6xl mx-auto w-full z-10 text-center md:text-left">
        <motion.div 
          style={{ 
            scale: heroScale, 
            opacity: heroOpacity, 
            y: heroY 
          }}
          className="origin-top md:origin-left"
        >
          <div className="flex items-center justify-center md:justify-start gap-3 mb-5">
            <div className="w-8 h-[2px] bg-[#9c3d3a]"></div>
            <span className="uppercase tracking-[0.3em] text-[11px] font-semibold text-[#9c3d3a]">Central Service Hub</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-light tracking-tight text-[#2b2721] leading-tight">
            ศูนย์บริการ <span className="font-semibold text-[#1e1c18]">ระบบสารสนเทศกลาง</span>
          </h1>
          
          <p className="text-[#7c746a] mt-5 max-w-2xl text-sm md:text-base font-light leading-relaxed">
            เข้าใช้ระบบจัดการข้อมูลภายในองค์กรได้อย่างง่ายดาย ปลอดภัย และเป็นระเบียบเรียบร้อย 
            คัดสรรระบบการบริหารจัดการสิทธิ์ใบอนุญาตนายหน้า และการรายงานผลการปฏิบัติงานไว้ในจุดเดียวตามปรัชญาความเรียบง่าย
          </p>

          {/* Interactive Scroll Down Prompt */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: [0.3, 0.8, 0.3] }}
            transition={{ repeat: Infinity, duration: 2.2, ease: "easeInOut" }}
            className="mt-10 flex flex-col items-center md:items-start gap-1.5 text-xs text-[#9c9386] tracking-widest font-light"
          >
            <span>เลื่อนหน้าจอลงด้านล่าง เพื่อเข้าใช้งานระบบ</span>
            <ChevronDown className="w-4 h-4 text-[#9c3d3a] animate-bounce mt-1" />
          </motion.div>
        </motion.div>
      </header>

      {/* Main Container: Apple-style Scroll Merge Grid */}
      <main className="flex-grow flex items-center px-6 md:px-16 pt-16 pb-28 max-w-6xl mx-auto w-full z-10">
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-10">
          {systems.map((sys) => {
            const IconComponent = sys.icon;
            const trans = sys.styleTransforms;
            return (
              <motion.div
                key={sys.id}
                style={{
                  x: trans.x,
                  y: trans.y,
                  rotate: trans.rotate,
                  opacity: trans.opacity
                }}
                onClick={() => handleNavigate(sys.url, sys.target, sys.title)}
                className={`group relative flex flex-col justify-between p-10 md:p-12 border ${sys.borderClass} ${sys.hoverBorderClass} ${sys.cardBg} transition-all duration-500 rounded-lg h-[390px] cursor-pointer shadow-[0_4px_25px_rgba(142,133,120,0.05)] hover:shadow-[0_16px_45px_rgba(142,133,120,0.13)]`}
              >
                {/* Clean Geometric Left Corner Indicator Line */}
                <div className={`absolute top-0 left-0 w-[4px] h-0 group-hover:h-full transition-all duration-500 ${sys.accentLine}`} />

                {/* Card Top / Header */}
                <div className="relative z-10 flex justify-between items-start mb-6">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-md transition-all duration-500 group-hover:scale-105 ${sys.iconBg}`}>
                    <IconComponent className="w-8 h-8 stroke-[1.5]" />
                  </div>
                  <span className={`text-[9px] tracking-[0.2em] font-medium px-3.5 py-1.5 rounded-sm ${sys.badgeBg}`}>
                    {sys.badge}
                  </span>
                </div>

                {/* Card Main Info */}
                <div className="relative z-10 mt-auto">
                  <h2 className={`text-2xl font-medium tracking-tight mb-2 ${sys.titleColor}`}>
                    {sys.title}
                  </h2>
                  
                  <p className="text-[11px] text-[#9c9386] font-medium uppercase tracking-widest mb-4">
                    {sys.titleEn}
                  </p>

                  <p className={`font-light text-xs md:text-sm leading-relaxed mb-6 ${sys.textColor}`}>
                    {sys.description}
                  </p>

                  {/* Elegant Interaction Link */}
                  <div className="inline-flex items-center gap-2.5 text-xs font-medium tracking-wider text-[#3c3730] group-hover:text-[#9c3d3a] transition-all">
                    <span>เปิดหน้าต่างระบบงาน</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1.5" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </main>

      {/* Elegant Transition Toast Feedback */}
      <AnimatePresence>
        {navigatingTo && (
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 15, scale: 0.98 }}
            className="fixed bottom-10 left-1/2 -translate-x-1/2 z-50 flex items-center gap-3.5 bg-white border border-[#eae4d9] text-[#3c3730] px-6 py-4 rounded-md shadow-[0_15px_40px_rgba(142,133,120,0.15)] backdrop-blur-md"
          >
            <div className="w-2.5 h-2.5 rounded-full bg-[#9c3d3a] animate-pulse" />
            <div className="text-xs">
              <span className="font-medium text-[#1e1c18] block">กำลังนำทางไปยัง {navigatingTo}</span>
              <p className="text-[10px] text-[#9c9386] mt-0.5">ระบบจะปรับลิงก์เข้าหน้าต่างเดิม ป้องกันหน้าต่างซ้อนกันอย่างมีประสิทธิภาพ</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Footer Details with scroll-linked opacity */}
      <motion.footer 
        style={{ opacity: footerOpacity }}
        className="px-6 md:px-16 py-12 border-t border-[#eae4d9] flex flex-col sm:flex-row justify-between items-center text-[10px] text-[#9c9386] uppercase tracking-[0.25em] gap-6 z-10 bg-[#f7f5f0]"
      >
        <div className="flex gap-8 items-center flex-wrap justify-center sm:justify-start">
          <span className="flex items-center gap-2 text-[#7c746a] font-medium">
            <Lock className="w-3.5 h-3.5 text-[#9c3d3a]" />
            Enterprise Secured Access
          </span>
          <span>Version 2.4.0</span>
        </div>
        <div className="text-center sm:text-right font-light tracking-[0.15em] text-[#aba396]">
          © 2026 Enterprise Hub. All Rights Reserved.
        </div>
      </motion.footer>

    </div>
  );
}
