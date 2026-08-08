import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Users, 
  FileCheck, 
  ArrowUpRight, 
  ShieldCheck, 
  Activity, 
  Lock, 
  Sparkles,
  HelpCircle,
  Sun,
  Moon,
  Phone,
  Mail,
  CheckCircle2,
  ExternalLink,
  Gauge
} from 'lucide-react';

export default function App() {
  const [navigatingTo, setNavigatingTo] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<'all' | 'staff' | 'license' | 'mileage'>('all');
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  const handleNavigate = (url: string, target: string, title: string) => {
    setNavigatingTo(title);
    setTimeout(() => {
      window.location.href = url;
    }, 850);
  };

  return (
    <div 
      className={`min-h-screen flex flex-col justify-between select-none font-sans antialiased safe-area-top safe-area-bottom px-4 sm:px-6 md:px-10 relative overflow-x-hidden transition-colors duration-300 gpu-accelerate ${
        isDarkMode 
          ? 'bg-[#13161c] text-[#e3e5eb]' 
          : 'bg-[#ebdcd0] text-[#2c2621]'
      }`}
    >
      
      {/* Background Organic Clay Waves & Soft Light (Safari-optimized radial gradients) */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {isDarkMode ? (
          <>
            <div className="absolute top-[-10%] left-[10%] w-[500px] h-[500px] bg-[radial-gradient(circle_at_center,rgba(240,124,83,0.12)_0%,transparent_70%)]" />
            <div className="absolute bottom-[-10%] right-[5%] w-[600px] h-[600px] bg-[radial-gradient(circle_at_center,rgba(100,196,167,0.12)_0%,transparent_70%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(#2d3342_1px,transparent_1px)] bg-[size:24px_24px] opacity-30" />
          </>
        ) : (
          <>
            <div className="absolute top-[-15%] right-[-5%] w-[650px] h-[650px] bg-[radial-gradient(circle_at_center,rgba(245,185,160,0.45)_0%,transparent_70%)]" />
            <div className="absolute bottom-[-10%] left-[-5%] w-[700px] h-[700px] bg-[radial-gradient(circle_at_center,rgba(141,179,202,0.35)_0%,transparent_70%)]" />
            {/* Clay organic wave shape SVG */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-6xl h-full opacity-20">
              <svg viewBox="0 0 1000 600" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                <path d="M0 200 C300 120, 500 350, 1000 180 L1000 600 L0 600 Z" fill="#d9c6b5" />
                <path d="M0 320 C400 240, 600 420, 1000 300 L1000 600 L0 600 Z" fill="#8cb2cb" opacity="0.3" />
              </svg>
            </div>
            <div className="absolute inset-0 bg-[radial-gradient(#baa595_1px,transparent_1px)] bg-[size:24px_24px] opacity-20" />
          </>
        )}
      </div>

      {/* Top Header / Branding Bar */}
      <header 
        className={`relative z-10 max-w-7xl mx-auto w-full mb-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 p-6 rounded-3xl border transition-all duration-300 gpu-accelerate ${
          isDarkMode 
            ? 'bg-[#1a1e28]/95 border-[#2d3444] shadow-lg' 
            : 'bg-[#f7f2eb]/90 border-white/80 shadow-[0_12px_30px_rgba(180,150,130,0.25),inset_2px_2px_4px_rgba(255,255,255,0.9)]'
        }`}
      >
        
        {/* Brand & Title */}
        <div className="flex items-center gap-4">
          {/* 3D Tactile Soft Clay Logo Icon */}
          <div 
            className={`w-14 h-14 rounded-2xl flex items-center justify-center border transition-all ${
              isDarkMode 
                ? 'bg-gradient-to-br from-[#f2efe6] to-[#d8d4c7] shadow-[inset_2px_2px_4px_rgba(255,255,255,0.9),inset_-2px_-2px_4px_rgba(0,0,0,0.15),4px_8px_20px_rgba(0,0,0,0.3)] border-white/50' 
                : 'bg-gradient-to-br from-[#f2a385] to-[#d97c5b] shadow-[0_8px_20px_rgba(224,140,108,0.4),inset_2px_2px_4px_rgba(255,255,255,0.6)] border-white/60'
            }`}
          >
            <div className={`w-8 h-8 rounded-full flex items-center justify-center ${isDarkMode ? 'bg-[#f07c53]' : 'bg-white/90'}`}>
              <Sparkles className={`w-4 h-4 ${isDarkMode ? 'text-white' : 'text-[#e08c6c]'}`} />
            </div>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span 
                className={`text-[10px] font-bold tracking-[0.25em] uppercase px-2.5 py-0.5 rounded-md border ${
                  isDarkMode 
                    ? 'text-[#f07c53] bg-[#f07c53]/10 border-[#f07c53]/20' 
                    : 'text-[#c8623f] bg-[#f2a385]/20 border-[#f2a385]/40'
                }`}
              >
                BRANCH SUPPORT SYSTEM
              </span>
              <span 
                className={`text-[10px] font-bold tracking-[0.15em] uppercase px-2.5 py-0.5 rounded-md border ${
                  isDarkMode 
                    ? 'text-[#64c4a7] bg-[#64c4a7]/10 border-[#64c4a7]/20' 
                    : 'text-[#48788a] bg-[#8db3ca]/25 border-[#8db3ca]/40'
                }`}
              >
                v2.4 Live
              </span>
            </div>
            <h1 className={`text-xl md:text-2xl font-bold tracking-tight mt-0.5 ${isDarkMode ? 'text-white' : 'text-[#2c231d]'}`}>
              Branch Support Service System
            </h1>
          </div>
        </div>

        {/* Header Right Actions: Filter Tabs & Light/Dark Theme Toggle */}
        <div className="flex flex-wrap items-center gap-3 w-full md:w-auto justify-between md:justify-end">
          
          {/* Tactile Filter / Navigation Tabs */}
          <div 
            className={`flex items-center p-1.5 rounded-2xl border shadow-inner ${
              isDarkMode 
                ? 'bg-[#13161c] border-[#2a303d]' 
                : 'bg-[#e4d6c7] border-[#d4c2b0]'
            }`}
          >
            <button
              onClick={() => setActiveTab('all')}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all duration-200 cursor-pointer ${
                activeTab === 'all'
                  ? isDarkMode
                    ? 'bg-gradient-to-b from-[#f5f3ec] to-[#e1ddd3] text-[#222733] shadow-[0_4px_12px_rgba(0,0,0,0.3),inset_1px_1px_2px_rgba(255,255,255,0.8)] font-bold'
                    : 'bg-white text-[#2c231d] shadow-[0_4px_10px_rgba(180,150,130,0.25),inset_1px_1px_2px_rgba(255,255,255,0.9)] font-bold'
                  : isDarkMode ? 'text-[#8e98a8] hover:text-white' : 'text-[#6d5e53] hover:text-[#2c231d]'
              }`}
            >
              ระบบทั้งหมด
            </button>
            <button
              onClick={() => setActiveTab('staff')}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all duration-200 cursor-pointer ${
                activeTab === 'staff'
                  ? 'bg-gradient-to-b from-[#f2a385] to-[#d97c5b] text-white shadow-[0_4px_12px_rgba(224,140,108,0.35),inset_1px_1px_2px_rgba(255,255,255,0.5)] font-bold'
                  : isDarkMode ? 'text-[#8e98a8] hover:text-white' : 'text-[#6d5e53] hover:text-[#2c231d]'
              }`}
            >
              ส่งยอดพนักงาน
            </button>
            <button
              onClick={() => setActiveTab('license')}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all duration-200 cursor-pointer ${
                activeTab === 'license'
                  ? 'bg-gradient-to-b from-[#8cb2cb] to-[#6a94b0] text-[#0f2738] shadow-[0_4px_12px_rgba(140,178,203,0.35),inset_1px_1px_2px_rgba(255,255,255,0.6)] font-bold'
                  : isDarkMode ? 'text-[#8e98a8] hover:text-white' : 'text-[#6d5e53] hover:text-[#2c231d]'
              }`}
            >
              ใบอนุญาตประกัน
            </button>
            <button
              onClick={() => setActiveTab('mileage')}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all duration-200 cursor-pointer ${
                activeTab === 'mileage'
                  ? 'bg-gradient-to-b from-[#64c4a7] to-[#429c81] text-[#082a20] shadow-[0_4px_12px_rgba(100,196,167,0.35),inset_1px_1px_2px_rgba(255,255,255,0.6)] font-bold'
                  : isDarkMode ? 'text-[#8e98a8] hover:text-white' : 'text-[#6d5e53] hover:text-[#2c231d]'
              }`}
            >
              บันทึกเลขไมล์
            </button>
          </div>

          {/* Light / Dark Mode Toggle Button */}
          <button
            onClick={() => setIsDarkMode(!isDarkMode)}
            title={isDarkMode ? "เปลี่ยนเป็น Light Mode" : "เปลี่ยนเป็น Dark Mode"}
            className={`p-2.5 rounded-2xl border flex items-center justify-center transition-all duration-200 cursor-pointer ${
              isDarkMode
                ? 'bg-[#1a1e28] text-[#e3c478] border-[#2d3444] hover:bg-[#252c3b] shadow-[inset_1px_1px_2px_rgba(255,255,255,0.1),0_4px_12px_rgba(0,0,0,0.3)]'
                : 'bg-white text-[#e08c6c] border-[#e8d7c8] hover:bg-[#fcf8f2] shadow-[0_4px_12px_rgba(180,150,130,0.2),inset_1px_1px_2px_rgba(255,255,255,0.9)]'
            }`}
          >
            {isDarkMode ? <Sun className="w-4 h-4 fill-[#e3c478]" /> : <Moon className="w-4 h-4 fill-[#e08c6c]" />}
          </button>

        </div>

      </header>

      {/* Main Bento Grid Layout (Directly inspired by 3D Clay Reference Image) */}
      <main className="relative z-10 max-w-7xl mx-auto w-full flex-grow grid grid-cols-1 md:grid-cols-12 gap-6">

        {/* ==================================================== */}
        {/* CARD 1: STAFF PERFORMANCE TRACKING (3D Clay Tile) */}
        {/* ==================================================== */}
        {(activeTab === 'all' || activeTab === 'staff') && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
            className={`rounded-3xl p-8 md:p-10 border relative overflow-hidden flex flex-col justify-between min-h-[420px] transition-colors duration-300 ${
              isDarkMode
                ? 'bg-[#1e232e] text-white border-[#2d3444] shadow-[8px_16px_35px_rgba(0,0,0,0.4),inset_2px_2px_4px_rgba(255,255,255,0.08)]'
                : 'bg-[#f7f2eb] text-[#2c231d] border-white/90 shadow-[8px_18px_35px_rgba(180,150,130,0.25),inset_2px_2px_4px_rgba(255,255,255,0.95)]'
            } ${activeTab === 'staff' ? 'md:col-span-12' : 'md:col-span-6 lg:col-span-4'}`}
          >
            {/* Ambient Radial Gradient Layer */}
            <div className="absolute -right-20 -top-20 w-80 h-80 bg-[radial-gradient(circle_at_center,rgba(242,163,133,0.25)_0%,transparent_70%)] pointer-events-none" />

            <div>
              {/* Header Badge & Title */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div 
                    className={`w-12 h-12 rounded-2xl flex items-center justify-center text-white shadow-md border ${
                      isDarkMode 
                        ? 'bg-[#f07c53] border-white/20' 
                        : 'bg-gradient-to-br from-[#f2a385] to-[#d97c5b] border-white/60 shadow-[0_6px_16px_rgba(224,140,108,0.35)]'
                    }`}
                  >
                    <Users className="w-6 h-6" />
                  </div>
                  <div>
                    <span className={`text-[10px] font-bold uppercase tracking-[0.2em] ${isDarkMode ? 'text-[#a16045]' : 'text-[#be613f]'}`}>
                      STAFF PERFORMANCE SYSTEM
                    </span>
                    <h2 className={`text-2xl md:text-3xl font-extrabold tracking-tight ${isDarkMode ? 'text-white' : 'text-[#2c231d]'}`}>
                      ระบบส่งยอดพนักงาน
                    </h2>
                  </div>
                </div>

                <span 
                  className={`text-[10px] font-bold tracking-widest px-3 py-1.5 rounded-xl border ${
                    isDarkMode 
                      ? 'bg-[#2a303d] text-[#b0bac9] border-[#384152]' 
                      : 'bg-[#ebdcd0] text-[#705c4f] border-[#d9c8b8]'
                  }`}
                >
                  DAILY REPORTING
                </span>
              </div>

              <p className={`text-sm font-normal leading-relaxed max-w-xl mb-8 ${isDarkMode ? 'text-[#a0aab8]' : 'text-[#5d5045]'}`}>
                ระบบรายงานและตรวจสอบผลการปฏิบัติงานรายวันของเจ้าหน้าที่องค์กรอย่างเป็นระบบ ปลอดภัย แสดงผลแบบเรียลไทม์ และช่วยสรุปยอดขายของแต่ละแผนกอย่างถูกต้อง
              </p>

              {/* 3D Visual Clay Gauge / Stats Row */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                
                {/* Donut Chart 3D Tile */}
                <div 
                  className={`p-4 rounded-2xl border flex items-center gap-3 ${
                    isDarkMode 
                      ? 'bg-[#161a22] border-[#29303e]' 
                      : 'bg-[#ebdcd0]/70 border-[#e2d0c0] shadow-[inset_2px_2px_4px_rgba(0,0,0,0.04),inset_-2px_-2px_4px_rgba(255,255,255,0.8)]'
                  }`}
                >
                  <div className="relative w-11 h-11 rounded-full border-4 border-[#f2a385] border-t-[#8cb2cb] border-r-[#ebdcd0] flex items-center justify-center shadow-sm">
                    <div className={`w-5 h-5 rounded-full ${isDarkMode ? 'bg-[#1e232e]' : 'bg-[#f7f2eb]'}`} />
                  </div>
                  <div>
                    <span className={`text-[10px] font-bold uppercase block ${isDarkMode ? 'text-[#8e98a8]' : 'text-[#806f63]'}`}>อัตราส่งยอด</span>
                    <span className={`text-base font-extrabold ${isDarkMode ? 'text-white' : 'text-[#2c231d]'}`}>98.4%</span>
                  </div>
                </div>

                {/* Bar Pillar Stat Tile */}
                <div 
                  className={`p-4 rounded-2xl border flex items-center gap-3 ${
                    isDarkMode 
                      ? 'bg-[#161a22] border-[#29303e]' 
                      : 'bg-[#ebdcd0]/70 border-[#e2d0c0] shadow-[inset_2px_2px_4px_rgba(0,0,0,0.04),inset_-2px_-2px_4px_rgba(255,255,255,0.8)]'
                  }`}
                >
                  <div className={`flex items-end gap-1 h-8 w-8 p-1.5 rounded-lg justify-center shadow-inner ${isDarkMode ? 'bg-[#252c3a]' : 'bg-[#ded0c2]'}`}>
                    <div className="w-1.5 h-full bg-[#f2a385] rounded-sm" />
                    <div className="w-1.5 h-3/4 bg-[#8cb2cb] rounded-sm" />
                    <div className="w-1.5 h-1/2 bg-[#a38cbe] rounded-sm" />
                  </div>
                  <div>
                    <span className={`text-[10px] font-bold uppercase block ${isDarkMode ? 'text-[#8e98a8]' : 'text-[#806f63]'}`}>อัปเดตข้อมูล</span>
                    <span className={`text-base font-extrabold ${isDarkMode ? 'text-white' : 'text-[#2c231d]'}`}>เรียลไทม์</span>
                  </div>
                </div>

                {/* Status Indicator Tile */}
                <div 
                  className={`p-4 rounded-2xl border flex items-center gap-3 ${
                    isDarkMode 
                      ? 'bg-[#161a22] border-[#29303e]' 
                      : 'bg-[#ebdcd0]/70 border-[#e2d0c0] shadow-[inset_2px_2px_4px_rgba(0,0,0,0.04),inset_-2px_-2px_4px_rgba(255,255,255,0.8)]'
                  }`}
                >
                  <div className="w-8 h-8 rounded-full bg-[#8cb2cb] text-[#0f2738] flex items-center justify-center font-bold text-xs shadow-sm">
                    <Activity className="w-4 h-4" />
                  </div>
                  <div>
                    <span className={`text-[10px] font-bold uppercase block ${isDarkMode ? 'text-[#8e98a8]' : 'text-[#806f63]'}`}>สถานะระบบ</span>
                    <span className={`text-base font-extrabold ${isDarkMode ? 'text-white' : 'text-[#2c231d]'}`}>พร้อมใช้งาน</span>
                  </div>
                </div>

              </div>
            </div>

            {/* Direct CTA Tactile 3D Button */}
            <div className={`pt-4 border-t flex flex-col sm:flex-row items-center justify-between gap-4 ${isDarkMode ? 'border-[#2d3444]' : 'border-[#e8dcd0]'}`}>
              <span className={`text-xs font-medium flex items-center gap-1.5 ${isDarkMode ? 'text-[#8e98a8]' : 'text-[#806f63]'}`}>
                <Lock className="w-3.5 h-3.5 text-[#f2a385]" />
                ระบบความปลอดภัย SSL Encrypted
              </span>

              <button
                onClick={() => handleNavigate(
                  'https://staff-performance-tracking-db.vercel.app/',
                  'staff_performance_tracking_system',
                  'ระบบส่งยอดพนักงาน'
                )}
                className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-gradient-to-r from-[#f2a385] to-[#e08c6c] text-white font-bold text-sm shadow-[0_10px_25px_rgba(224,140,108,0.4),inset_1px_1px_2px_rgba(255,255,255,0.4)] hover:shadow-[0_14px_30px_rgba(224,140,108,0.5)] active:scale-95 transition-all duration-150 flex items-center justify-center gap-2 group cursor-pointer"
              >
                <span>เข้าสู่ระบบส่งยอดพนักงาน</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </button>
            </div>

          </motion.div>
        )}

        {/* ==================================================== */}
        {/* CARD 2: INSURANCE LICENSE MANAGEMENT (3D Clay Tile) */}
        {/* ==================================================== */}
        {(activeTab === 'all' || activeTab === 'license') && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: 0.08 }}
            className={`rounded-3xl p-8 md:p-10 border relative overflow-hidden flex flex-col justify-between min-h-[420px] transition-colors duration-300 ${
              isDarkMode
                ? 'bg-[#8cb2cb]/20 border-[#8cb2cb]/30 text-white shadow-[8px_16px_35px_rgba(0,0,0,0.4)]'
                : 'bg-[#8cb2cb] text-[#0f2738] border-white/60 shadow-[8px_18px_35px_rgba(140,178,203,0.35),inset_2px_2px_4px_rgba(255,255,255,0.7)]'
            } ${activeTab === 'license' ? 'md:col-span-12' : 'md:col-span-6 lg:col-span-4'}`}
          >
            {/* Ambient Glow Overlay */}
            <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.25)_0%,transparent_70%)] pointer-events-none" />

            <div>
              {/* Header Badge & Title */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div 
                    className={`w-12 h-12 rounded-2xl flex items-center justify-center shadow-md border ${
                      isDarkMode 
                        ? 'bg-[#8cb2cb] text-[#0f2738] border-white/40' 
                        : 'bg-white text-[#5281a0] border-white/80 shadow-[0_6px_16px_rgba(82,129,160,0.25)]'
                    }`}
                  >
                    <FileCheck className="w-6 h-6" />
                  </div>
                  <div>
                    <span className={`text-[10px] font-bold uppercase tracking-[0.2em] ${isDarkMode ? 'text-[#8cb2cb]' : 'text-[#1c4b69]'}`}>
                      EASYBROKER HUB
                    </span>
                    <h2 className={`text-2xl md:text-3xl font-extrabold tracking-tight ${isDarkMode ? 'text-white' : 'text-[#0f2738]'}`}>
                      จัดการใบอนุญาตประกัน
                    </h2>
                  </div>
                </div>

                <span 
                  className={`text-[10px] font-bold tracking-widest px-3 py-1.5 rounded-xl border ${
                    isDarkMode 
                      ? 'bg-[#8cb2cb]/20 text-[#c2dceb] border-[#8cb2cb]/30' 
                      : 'bg-white/40 text-[#0f2738] border-white/60 shadow-inner'
                  }`}
                >
                  EASYBROKER
                </span>
              </div>

              <p className={`text-sm font-normal leading-relaxed mb-8 ${isDarkMode ? 'text-[#c0d4e3]' : 'text-[#1c3e54]'}`}>
                EasyBroker Hub ศูนย์กลางตรวจสอบสถานะ คัดกรอง และบันทึกข้อมูลใบอนุญาตนายหน้าประกันภัยอย่างเป็นระบบและปลอดภัยสูงสุด
              </p>

              {/* 3D Tactile Dial / Features Indicator */}
              <div 
                className={`p-5 rounded-2xl border mb-8 flex items-center justify-between gap-4 ${
                  isDarkMode 
                    ? 'bg-[#13161c]/60 border-[#8cb2cb]/30' 
                    : 'bg-white/40 border-white/80 shadow-[inset_2px_2px_4px_rgba(255,255,255,0.8)]'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-full bg-gradient-to-br from-[#f2efe6] to-[#d8d4c7] flex items-center justify-center shadow-sm border border-white">
                    <ShieldCheck className="w-5 h-5 text-[#2c4e66]" />
                  </div>
                  <div>
                    <span className={`text-xs font-bold block ${isDarkMode ? 'text-white' : 'text-[#0f2738]'}`}>EasyBroker Verification</span>
                    <span className={`text-[11px] ${isDarkMode ? 'text-[#a0bacd]' : 'text-[#2a536e]'}`}>ตรวจสอบสิทธิ์นายหน้าและวันหมดอายุ</span>
                  </div>
                </div>

                <div className="hidden sm:flex items-center gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span className={`text-xs font-semibold ${isDarkMode ? 'text-emerald-400' : 'text-emerald-800'}`}>Active</span>
                </div>
              </div>
            </div>

            {/* Direct CTA Tactile 3D Button */}
            <div className={`pt-4 border-t flex flex-col sm:flex-row items-center justify-between gap-4 ${isDarkMode ? 'border-[#8cb2cb]/20' : 'border-white/50'}`}>
              <span className={`text-xs font-medium flex items-center gap-1.5 ${isDarkMode ? 'text-[#a0bacd]' : 'text-[#1c3e54]'}`}>
                <ShieldCheck className="w-3.5 h-3.5" />
                ระบบคัดกรองข้อมูลมาตรฐานองค์กร
              </span>

              <button
                onClick={() => handleNavigate(
                  'https://easy-ins-system.vercel.app',
                  'insurance_license_system',
                  'ระบบจัดการใบอนุญาตประกัน'
                )}
                className={`w-full sm:w-auto px-8 py-4 rounded-2xl font-bold text-sm shadow-md active:scale-95 transition-all duration-150 flex items-center justify-center gap-2 group cursor-pointer ${
                  isDarkMode
                    ? 'bg-gradient-to-r from-[#8cb2cb] to-[#6a94b0] text-[#0f2738] hover:shadow-lg'
                    : 'bg-[#0f2738] text-white hover:bg-[#1a384e] shadow-[0_10px_25px_rgba(15,39,56,0.3)]'
                }`}
              >
                <span>เข้าสู่ระบบ EasyBroker Hub</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </button>
            </div>

          </motion.div>
        )}

        {/* ==================================================== */}
        {/* CARD 3: MILEAGE TRACKER SYSTEM (3D Clay Tile) */}
        {/* ==================================================== */}
        {(activeTab === 'all' || activeTab === 'mileage') && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: 0.12 }}
            className={`rounded-3xl p-8 md:p-10 border relative overflow-hidden flex flex-col justify-between min-h-[420px] transition-colors duration-300 ${
              isDarkMode
                ? 'bg-[#64c4a7]/20 border-[#64c4a7]/30 text-white shadow-[8px_16px_35px_rgba(0,0,0,0.4)]'
                : 'bg-[#64c4a7] text-[#082a20] border-white/60 shadow-[8px_18px_35px_rgba(100,196,167,0.35),inset_2px_2px_4px_rgba(255,255,255,0.7)]'
            } ${activeTab === 'mileage' ? 'md:col-span-12' : 'md:col-span-12 lg:col-span-4'}`}
          >
            {/* Ambient Glow Overlay */}
            <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.25)_0%,transparent_70%)] pointer-events-none" />

            <div>
              {/* Header Badge & Title */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div 
                    className={`w-12 h-12 rounded-2xl flex items-center justify-center shadow-md border ${
                      isDarkMode 
                        ? 'bg-[#64c4a7] text-[#082a20] border-white/40' 
                        : 'bg-white text-[#2a8068] border-white/80 shadow-[0_6px_16px_rgba(42,128,104,0.25)]'
                    }`}
                  >
                    <Gauge className="w-6 h-6" />
                  </div>
                  <div>
                    <span className={`text-[10px] font-bold uppercase tracking-[0.2em] ${isDarkMode ? 'text-[#64c4a7]' : 'text-[#0e523f]'}`}>
                      MILEAGE SYSTEM
                    </span>
                    <h2 className={`text-2xl md:text-3xl font-extrabold tracking-tight ${isDarkMode ? 'text-white' : 'text-[#082a20]'}`}>
                      บันทึกข้อมูลเลขไมล์
                    </h2>
                  </div>
                </div>

                <span 
                  className={`text-[10px] font-bold tracking-widest px-3 py-1.5 rounded-xl border ${
                    isDarkMode 
                      ? 'bg-[#64c4a7]/20 text-[#bfe8db] border-[#64c4a7]/30' 
                      : 'bg-white/40 text-[#082a20] border-white/60 shadow-inner'
                  }`}
                >
                  MILEAGE TRACKER
                </span>
              </div>

              <p className={`text-sm font-normal leading-relaxed mb-8 ${isDarkMode ? 'text-[#bfe8db]' : 'text-[#0e4032]'}`}>
                ระบบบันทึกและติดตามข้อมูลเลขไมล์การเดินทาง คำนวณระยะทาง ตรวจสอบประวัติการใช้งานยานพาหนะขององค์กรได้อย่างถูกต้องและเป็นระบบ
              </p>

              {/* 3D Tactile Dial / Features Indicator */}
              <div 
                className={`p-5 rounded-2xl border mb-8 flex items-center justify-between gap-4 ${
                  isDarkMode 
                    ? 'bg-[#13161c]/60 border-[#64c4a7]/30' 
                    : 'bg-white/40 border-white/80 shadow-[inset_2px_2px_4px_rgba(255,255,255,0.8)]'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-full bg-gradient-to-br from-[#f2efe6] to-[#d8d4c7] flex items-center justify-center shadow-sm border border-white">
                    <Activity className="w-5 h-5 text-[#1e5d4c]" />
                  </div>
                  <div>
                    <span className={`text-xs font-bold block ${isDarkMode ? 'text-white' : 'text-[#082a20]'}`}>Odometer & Distance Logging</span>
                    <span className={`text-[11px] ${isDarkMode ? 'text-[#a2d8c8]' : 'text-[#104a3a]'}`}>บันทึกระยะทางและประวัติการขับขี่</span>
                  </div>
                </div>

                <div className="hidden sm:flex items-center gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span className={`text-xs font-semibold ${isDarkMode ? 'text-emerald-400' : 'text-emerald-950'}`}>Active</span>
                </div>
              </div>
            </div>

            {/* Direct CTA Tactile 3D Button */}
            <div className={`pt-4 border-t flex flex-col sm:flex-row items-center justify-between gap-4 ${isDarkMode ? 'border-[#64c4a7]/20' : 'border-white/50'}`}>
              <span className={`text-xs font-medium flex items-center gap-1.5 ${isDarkMode ? 'text-[#a2d8c8]' : 'text-[#0e4032]'}`}>
                <ShieldCheck className="w-3.5 h-3.5" />
                ระบบบันทึกข้อมูลระยะทางมาตรฐานองค์กร
              </span>

              <button
                onClick={() => handleNavigate(
                  'https://mileage-tracker-bice.vercel.app',
                  'mileage_tracker_system',
                  'ระบบบันทึกข้อมูลเลขไมล์'
                )}
                className={`w-full sm:w-auto px-8 py-4 rounded-2xl font-bold text-sm shadow-md active:scale-95 transition-all duration-150 flex items-center justify-center gap-2 group cursor-pointer ${
                  isDarkMode
                    ? 'bg-gradient-to-r from-[#64c4a7] to-[#429c81] text-[#082a20] hover:shadow-lg'
                    : 'bg-[#082a20] text-white hover:bg-[#0f4233] shadow-[0_10px_25px_rgba(8,42,32,0.3)]'
                }`}
              >
                <span>เข้าสู่ระบบบันทึกเลขไมล์</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </button>
            </div>

          </motion.div>
        )}

        {/* ==================================================== */}
        {/* LOWER BENTO ROW: CAPACITY, SUPPORT CONTACT & SECURITY */}
        {/* ==================================================== */}

        {/* Bento Box 3: System Capacity Dial Tile */}
        <div 
          className={`md:col-span-4 rounded-3xl p-6 border flex flex-col justify-between transition-colors duration-300 ${
            isDarkMode 
              ? 'bg-[#1e232e] border-[#2d3444] shadow-md' 
              : 'bg-[#f7f2eb] border-white/90 shadow-[0_10px_25px_rgba(180,150,130,0.18)]'
          }`}
        >
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className={`text-[10px] font-bold uppercase tracking-widest ${isDarkMode ? 'text-[#8e98a8]' : 'text-[#806f63]'}`}>
                SYSTEM CAPACITY
              </span>
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
            </div>

            <div className="flex items-center gap-5 my-2">
              {/* 3D Donut Wheel */}
              <div 
                className={`relative w-20 h-20 rounded-full border-8 border-[#f2a385] border-t-[#8cb2cb] border-l-[#a38cbe] flex items-center justify-center shadow-inner ${
                  isDarkMode ? 'bg-[#13161c]' : 'bg-[#ebdcd0]'
                }`}
              >
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-[10px] font-bold ${isDarkMode ? 'bg-[#1e232e] text-white' : 'bg-[#f7f2eb] text-[#2c231d]'}`}>
                  99%
                </div>
              </div>
              <div>
                <span className={`text-xl font-bold block ${isDarkMode ? 'text-white' : 'text-[#2c231d]'}`}>เสถียรภาพระบบ</span>
                <p className={`text-xs mt-1 ${isDarkMode ? 'text-[#8e98a8]' : 'text-[#736356]'}`}>การเชื่อมต่อพร้อมใช้งาน 24/7 ไร้สะดุด</p>
              </div>
            </div>
          </div>

          <div className={`mt-4 pt-4 border-t flex items-center justify-between text-xs ${isDarkMode ? 'border-[#2d3444] text-[#8e98a8]' : 'border-[#e8dcd0] text-[#806f63]'}`}>
            <span>ความเร็วตอบสนอง</span>
            <span className="font-bold text-emerald-600 dark:text-emerald-400">12ms (Ultra Fast)</span>
          </div>
        </div>

        {/* Bento Box 4: IT Support Contact Card (Email & Mobile) */}
        <div 
          className={`md:col-span-4 rounded-3xl p-6 border flex flex-col justify-between transition-colors duration-300 ${
            isDarkMode 
              ? 'bg-[#1e232e] border-[#2d3444] shadow-md' 
              : 'bg-[#f7f2eb] border-white/90 shadow-[0_10px_25px_rgba(180,150,130,0.18)]'
          }`}
        >
          <div>
            <div className="flex items-center justify-between mb-3">
              <span className={`text-[10px] font-bold uppercase tracking-widest ${isDarkMode ? 'text-[#f07c53]' : 'text-[#d96e43]'}`}>
                IT SUPPORT CONTACT
              </span>
              <HelpCircle className={`w-4 h-4 ${isDarkMode ? 'text-[#8e98a8]' : 'text-[#806f63]'}`} />
            </div>

            <h3 className={`text-lg font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-[#2c231d]'}`}>ศูนย์ช่วยเหลือ & คอนแทคไอที</h3>
            <p className={`text-xs leading-relaxed mb-4 ${isDarkMode ? 'text-[#8e98a8]' : 'text-[#736356]'}`}>
              หากพบปัญหาการส่งยอดหรือการใช้งานใบอนุญาต สามารถติดต่อฝ่ายช่วยเหลือทางเทคนิคได้โดยตรง
            </p>
          </div>

          {/* Contact Details Buttons: Email + Mobile */}
          <div className={`pt-4 border-t flex flex-col gap-2.5 ${isDarkMode ? 'border-[#2d3444]' : 'border-[#e8dcd0]'}`}>
            
            {/* Email Contact */}
            <a 
              href="mailto:Phanumars.bas@gmail.com"
              className={`text-xs font-bold px-3.5 py-2 rounded-xl border flex items-center justify-between transition-all cursor-pointer ${
                isDarkMode 
                  ? 'bg-[#f07c53]/10 text-[#f07c53] border-[#f07c53]/20 hover:bg-[#f07c53]/20' 
                  : 'bg-[#f2a385]/15 text-[#c85a32] border-[#f2a385]/30 hover:bg-[#f2a385]/25'
              }`}
            >
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5" />
                <span>Phanumars.bas@gmail.com</span>
              </div>
              <ExternalLink className="w-3.5 h-3.5 opacity-60" />
            </a>

            {/* Mobile Contact */}
            <a 
              href="tel:+66957695558"
              className={`text-xs font-bold px-3.5 py-2 rounded-xl border flex items-center justify-between transition-all cursor-pointer ${
                isDarkMode 
                  ? 'bg-[#64c4a7]/10 text-[#64c4a7] border-[#64c4a7]/20 hover:bg-[#64c4a7]/20' 
                  : 'bg-[#8cb2cb]/20 text-[#215a7f] border-[#8cb2cb]/40 hover:bg-[#8cb2cb]/30'
              }`}
            >
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5" />
                <span>+66-95-769-5558 (TH)</span>
              </div>
              <ExternalLink className="w-3.5 h-3.5 opacity-60" />
            </a>

          </div>
        </div>

        {/* Bento Box 5: User Access Security Protocol Tile */}
        <div 
          className={`md:col-span-4 rounded-3xl p-6 border flex flex-col justify-between transition-colors duration-300 ${
            isDarkMode 
              ? 'bg-[#1e232e] border-[#2d3444] shadow-md' 
              : 'bg-[#f7f2eb] border-white/90 shadow-[0_10px_25px_rgba(180,150,130,0.18)]'
          }`}
        >
          <div>
            <div className="flex items-center justify-between mb-3">
              <span className={`text-[10px] font-bold uppercase tracking-widest ${isDarkMode ? 'text-[#64c4a7]' : 'text-[#387a64]'}`}>
                SECURITY PROTOCOL
              </span>
              <Lock className={`w-4 h-4 ${isDarkMode ? 'text-[#64c4a7]' : 'text-[#387a64]'}`} />
            </div>

            <h3 className={`text-lg font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-[#2c231d]'}`}>เข้าใช้ในหน้าต่างเดิม</h3>
            <p className={`text-xs leading-relaxed ${isDarkMode ? 'text-[#8e98a8]' : 'text-[#736356]'}`}>
              ระบบได้รับการปรับแต่งให้นำทางในแท็บเดิม เพื่อป้องกันปัญหา Popup Blocker บน Safari / Mobile และรักษาสถานะความปลอดภัย
            </p>
          </div>

          <div className={`mt-4 pt-4 border-t flex items-center justify-between text-xs ${isDarkMode ? 'border-[#2d3444] text-[#8e98a8]' : 'border-[#e8dcd0] text-[#806f63]'}`}>
            <span>สถานะความปลอดภัย</span>
            <span className={`font-bold flex items-center gap-1.5 ${isDarkMode ? 'text-white' : 'text-[#2c231d]'}`}>
              <div className="w-2 h-2 rounded-full bg-emerald-500" />
              SSL Encrypted 256-bit
            </span>
          </div>
        </div>

      </main>

      {/* Floating Redirect Toast Alert */}
      <AnimatePresence>
        {navigatingTo && (
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className={`fixed bottom-8 left-1/2 -translate-x-1/2 z-50 flex items-center gap-4 px-8 py-4 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.4)] border ${
              isDarkMode 
                ? 'bg-[#1e232e] text-white border-[#384152]' 
                : 'bg-[#f7f2eb] text-[#2c231d] border-white'
            }`}
          >
            <div className="w-3 h-3 rounded-full bg-[#f2a385] animate-ping" />
            <div className="text-xs">
              <span className="font-extrabold block">กำลังเชื่อมต่อไปยัง {navigatingTo}...</span>
              <p className={`text-[11px] mt-0.5 ${isDarkMode ? 'text-[#a0aab8]' : 'text-[#736356]'}`}>
                นำทางในหน้าต่างเดิมเพื่อป้องกัน Popup Blocker
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Footer */}
      <footer className={`relative z-10 max-w-7xl mx-auto w-full mt-10 pt-6 border-t flex flex-col sm:flex-row justify-between items-center gap-4 text-[11px] transition-colors duration-300 ${
        isDarkMode ? 'border-[#232834] text-[#6b7688]' : 'border-[#d9c8b8] text-[#806f63]'
      }`}>
        <div className="flex items-center gap-2">
          <ShieldCheck className="w-4 h-4 text-[#8cb2cb]" />
          <span>Branch Support Service System • Enterprise Portal • Phanumars.bas@gmail.com</span>
        </div>
        <div>
          © 2026 Enterprise Hub. All Rights Reserved.
        </div>
      </footer>

    </div>
  );
}
