import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ShieldCheck, 
  CheckCircle,
  Users,
  FileCheck,
  ArrowRight
} from 'lucide-react';

export default function App() {
  const [navigatingTo, setNavigatingTo] = useState<string | null>(null);

  const systems = [
    {
      id: 'staff-performance',
      title: 'ระบบส่งยอดพนักงาน',
      titleEn: 'Staff Performance Tracking',
      description: 'ระบบติดตามและบันทึกข้อมูลผลการปฏิบัติงานรายวันของเจ้าหน้าที่อย่างเป็นระบบแบบเรียลไทม์ เพื่อช่วยให้การจัดการพนักงานมีประสิทธิภาพสูงสุด',
      url: 'https://staff-performance-tracking-db.vercel.app/',
      target: 'staff_performance_tracking_system',
      icon: Users,
      themeColor: 'sky',
      glowClass: 'bg-sky-500/10 group-hover:bg-sky-500/20',
      iconWrapperClass: 'bg-sky-500/10 border-sky-500/30 text-sky-400',
      accentColorClass: 'text-sky-400',
      bottomBarClass: 'bg-sky-500',
      badge: 'STAFF PERFORMANCE'
    },
    {
      id: 'insurance-license',
      title: 'ระบบจัดการใบอนุญาตประกัน',
      titleEn: 'Insurance License Management',
      description: 'EasyBroker Hub สำหรับตรวจสอบสถานะ ต่ออายุ และบริหารจัดการใบอนุญาตนายหน้าประกันภัยอย่างเป็นระบบ รวดเร็ว และปลอดภัย',
      url: 'https://easybroker-hub.vercel.app/',
      target: 'insurance_license_system',
      icon: FileCheck,
      themeColor: 'emerald',
      glowClass: 'bg-emerald-500/10 group-hover:bg-emerald-500/20',
      iconWrapperClass: 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400',
      accentColorClass: 'text-emerald-400',
      bottomBarClass: 'bg-emerald-500',
      badge: 'EASYBROKER HUB'
    }
  ];

  const handleNavigate = (url: string, target: string, title: string) => {
    setNavigatingTo(title);
    
    // Open in a named target to reuse existing tab/window, preventing multiple stackings
    window.open(url, target);

    // Reset navigating state after a brief visual confirmation
    setTimeout(() => {
      setNavigatingTo(null);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col justify-between overflow-x-hidden relative select-none font-sans">
      
      {/* Background Decoration (Geometric Balance Theme) */}
      <div className="fixed inset-0 pointer-events-none opacity-20 z-0">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] border border-slate-800 rounded-full -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-[800px] h-[800px] border border-slate-800 rounded-full translate-y-1/2 -translate-x-1/2"></div>
        <div className="absolute top-1/3 left-1/2 w-[300px] h-[300px] border border-dashed border-slate-900 rounded-full -translate-x-1/2"></div>
      </div>

      {/* Header Section */}
      <header className="pt-16 pb-8 px-6 md:px-16 max-w-7xl mx-auto w-full z-10">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-4 mb-3"
        >
          <div className="w-12 h-1 bg-sky-500"></div>
          <span className="uppercase tracking-[0.3em] text-xs font-bold text-sky-500">Enterprise Portal</span>
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl md:text-5xl font-light tracking-tight text-white"
        >
          ศูนย์บริการ <span className="font-bold">ระบบสารสนเทศกลาง</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-slate-400 mt-4 max-w-xl text-base md:text-lg font-light leading-relaxed"
        >
          ศูนย์รวมระบบงานส่วนกลางเพื่อความสะดวก รวดเร็ว และเป็นระบบระเบียบในการเข้าจัดการข้อมูลสำหรับเจ้าหน้าที่และผู้เกี่ยวข้อง
        </motion.p>
      </header>

      {/* Main Access Selection: Geometric Split Layout */}
      <main className="flex-grow flex items-center px-6 md:px-16 pb-16 max-w-7xl mx-auto w-full z-10">
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-10">
          {systems.map((sys, idx) => {
            const IconComponent = sys.icon;
            return (
              <motion.div
                key={sys.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * (idx + 1) }}
                onClick={() => handleNavigate(sys.url, sys.target, sys.title)}
                className="group relative flex flex-col justify-between p-10 border border-slate-800 bg-slate-900/40 hover:bg-slate-800/60 transition-all duration-300 ring-1 ring-inset ring-white/5 overflow-hidden rounded-lg cursor-pointer"
              >
                {/* Geometric Background Element Inside Card */}
                <div className={`absolute -top-12 -right-12 w-48 h-48 rounded-full blur-3xl transition-colors duration-500 ${sys.glowClass}`}></div>
                
                {/* Card Top / Badge & Icon */}
                <div className="relative z-10 flex justify-between items-start mb-10">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl border group-hover:scale-110 transition-transform duration-300 ${sys.iconWrapperClass}`}>
                    <IconComponent className="w-8 h-8" />
                  </div>
                  <span className="text-[10px] tracking-widest font-mono text-slate-500 font-bold bg-slate-950/80 px-3 py-1 rounded border border-slate-800">
                    {sys.badge}
                  </span>
                </div>

                {/* Card Core info */}
                <div className="relative z-10 mt-auto">
                  <h2 className="text-3xl font-bold mb-3 tracking-tight text-white group-hover:text-slate-200 transition-colors">
                    {sys.title}
                  </h2>
                  
                  <p className="text-xs text-slate-500 font-medium font-mono uppercase tracking-wider mb-4">
                    {sys.titleEn}
                  </p>

                  <p className="text-slate-400 font-light text-sm leading-relaxed mb-8 max-w-md">
                    {sys.description}
                  </p>

                  {/* Elegant Call to Action trigger */}
                  <div className={`inline-flex items-center gap-3 font-semibold group-hover:gap-5 transition-all ${sys.accentColorClass}`}>
                    <span>เข้าสู่ระบบงาน</span>
                    <ArrowRight className="w-5 h-5" />
                  </div>
                </div>

                {/* Geometric Bottom Highlight Line */}
                <div className={`absolute bottom-0 left-0 w-full h-1 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500 ${sys.bottomBarClass}`}></div>
              </motion.div>
            );
          })}
        </div>
      </main>

      {/* Toast Notification for Seamless Reuse Feedback */}
      <AnimatePresence>
        {navigatingTo && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 flex items-center gap-3 bg-slate-900 border border-slate-800 text-emerald-400 px-5 py-4 rounded-lg shadow-2xl backdrop-blur-md"
          >
            <CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0" />
            <div className="text-sm">
              <span className="font-semibold text-white">กำลังเปิด {navigatingTo}</span>
              <p className="text-[10px] text-slate-400 mt-0.5">ระบบทำการเชื่อมต่อหน้าต่างเก่าเพื่อป้องกันหน้าต่างซ้อนกันเรียบร้อย</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Footer Details */}
      <footer className="px-6 md:px-16 py-8 border-t border-slate-900 flex flex-col sm:flex-row justify-between items-center text-xs text-slate-500 uppercase tracking-widest gap-4 z-10 bg-slate-950/80 backdrop-blur-sm">
        <div className="flex gap-8">
          <span className="flex items-center gap-1.5 text-slate-500">
            <ShieldCheck className="w-4 h-4 text-sky-500" />
            SECURE ACCESS PORTAL
          </span>
          <span>Version 2.4.0</span>
        </div>
        <div className="text-center sm:text-right font-light">
          © 2026 Enterprise Hub. All Rights Reserved.
        </div>
      </footer>

    </div>
  );
}
