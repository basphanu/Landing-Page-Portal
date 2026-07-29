import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Users, 
  FileCheck, 
  ArrowUpRight, 
  ShieldCheck, 
  Activity, 
  Lock, 
  ChevronRight,
  TrendingUp,
  FileText,
  Clock,
  Sparkles,
  Layers,
  HelpCircle
} from 'lucide-react';

export default function App() {
  const [navigatingTo, setNavigatingTo] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<'all' | 'staff' | 'license'>('all');

  const handleNavigate = (url: string, target: string, title: string) => {
    setNavigatingTo(title);
    setTimeout(() => {
      window.location.href = url;
    }, 850);
  };

  return (
    <div className="min-h-screen bg-[#13161c] text-[#e3e5eb] flex flex-col justify-between select-none font-sans antialiased p-4 sm:p-6 md:p-10 relative overflow-x-hidden">
      
      {/* Background Soft Ambient Light (Optimized Radial Gradients for Safari) */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-[-10%] left-[10%] w-[500px] h-[500px] bg-[radial-gradient(circle_at_center,rgba(240,124,83,0.12)_0%,transparent_70%)]" />
        <div className="absolute bottom-[-10%] right-[5%] w-[600px] h-[600px] bg-[radial-gradient(circle_at_center,rgba(100,196,167,0.12)_0%,transparent_70%)]" />
        {/* Fine Dot Grid */}
        <div className="absolute inset-0 bg-[radial-gradient(#2d3342_1px,transparent_1px)] bg-[size:24px_24px] opacity-40" />
      </div>

      {/* Top Header / Branding Bar */}
      <header className="relative z-10 max-w-7xl mx-auto w-full mb-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 bg-[#1a1e28]/95 p-6 rounded-3xl border border-[#2d3444] shadow-lg gpu-accelerate">
        
        {/* Brand & Title */}
        <div className="flex items-center gap-4">
          {/* 3D Tactile Logo Icon */}
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#f2efe6] to-[#d8d4c7] flex items-center justify-center shadow-[inset_2px_2px_4px_rgba(255,255,255,0.9),inset_-2px_-2px_4px_rgba(0,0,0,0.15),4px_8px_20px_rgba(0,0,0,0.3)] border border-white/50">
            <div className="w-8 h-8 rounded-full bg-[#f07c53] flex items-center justify-center shadow-[inset_-1px_-1px_2px_rgba(0,0,0,0.3),inset_1px_1px_2px_rgba(255,255,255,0.5)]">
              <Sparkles className="w-4 h-4 text-white" />
            </div>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-bold tracking-[0.25em] text-[#f07c53] uppercase bg-[#f07c53]/10 px-2.5 py-0.5 rounded-md border border-[#f07c53]/20">
                Enterprise Portal
              </span>
              <span className="text-[10px] font-bold tracking-[0.15em] text-[#64c4a7] uppercase bg-[#64c4a7]/10 px-2.5 py-0.5 rounded-md border border-[#64c4a7]/20">
                v2.4 Live
              </span>
            </div>
            <h1 className="text-xl md:text-2xl font-bold text-white tracking-tight mt-0.5">
              ศูนย์บริการสารสนเทศกลาง
            </h1>
          </div>
        </div>

        {/* Tactile Filter / Navigation Tabs (Matching Ref 3D Pill Toggle) */}
        <div className="flex items-center bg-[#13161c] p-1.5 rounded-2xl border border-[#2a303d] shadow-[inset_2px_2px_6px_rgba(0,0,0,0.5),inset_-1px_-1px_3px_rgba(255,255,255,0.05)]">
          <button
            onClick={() => setActiveTab('all')}
            className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-200 ${
              activeTab === 'all'
                ? 'bg-gradient-to-b from-[#f5f3ec] to-[#e1ddd3] text-[#222733] shadow-[0_4px_12px_rgba(0,0,0,0.3),inset_1px_1px_2px_rgba(255,255,255,0.8)] font-bold'
                : 'text-[#8e98a8] hover:text-white'
            }`}
          >
            ระบบทั้งหมด
          </button>
          <button
            onClick={() => setActiveTab('staff')}
            className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-200 ${
              activeTab === 'staff'
                ? 'bg-gradient-to-b from-[#f07c53] to-[#d96339] text-white shadow-[0_4px_12px_rgba(240,124,83,0.35),inset_1px_1px_2px_rgba(255,255,255,0.4)] font-bold'
                : 'text-[#8e98a8] hover:text-white'
            }`}
          >
            ส่งยอดพนักงาน
          </button>
          <button
            onClick={() => setActiveTab('license')}
            className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-200 ${
              activeTab === 'license'
                ? 'bg-gradient-to-b from-[#64c4a7] to-[#4aa88c] text-[#0f2d24] shadow-[0_4px_12px_rgba(100,196,167,0.35),inset_1px_1px_2px_rgba(255,255,255,0.5)] font-bold'
                : 'text-[#8e98a8] hover:text-white'
            }`}
          >
            ใบอนุญาตประกัน
          </button>
        </div>

      </header>

      {/* Main Bento Grid Layout (Directly inspired by Reference Image Cards) */}
      <main className="relative z-10 max-w-7xl mx-auto w-full flex-grow grid grid-cols-1 md:grid-cols-12 gap-6">

        {/* ==================================================== */}
        {/* CARD 1: STAFF PERFORMANCE TRACKING (Large Off-white Clay) */}
        {/* ==================================================== */}
        {(activeTab === 'all' || activeTab === 'staff') && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="md:col-span-7 bg-[#edebe4] text-[#1e232e] rounded-3xl p-8 md:p-10 shadow-[8px_16px_35px_rgba(0,0,0,0.35),inset_2px_2px_4px_rgba(255,255,255,0.9),inset_-2px_-2px_4px_rgba(0,0,0,0.08)] border border-white/60 relative overflow-hidden flex flex-col justify-between min-h-[420px]"
          >
            {/* Soft Ambient Shadow Overlay (Optimized for Safari) */}
            <div className="absolute -right-20 -top-20 w-80 h-80 bg-[radial-gradient(circle_at_center,rgba(240,124,83,0.18)_0%,transparent_70%)] pointer-events-none" />

            <div>
              {/* Header Badge & Title */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-[#f07c53] flex items-center justify-center text-white shadow-[0_6px_16px_rgba(240,124,83,0.4),inset_1px_1px_2px_rgba(255,255,255,0.4)]">
                    <Users className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#a16045]">
                      ENTERPRISE STAFF SYSTEM
                    </span>
                    <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a1e28] tracking-tight">
                      ระบบส่งยอดพนักงาน
                    </h2>
                  </div>
                </div>

                <span className="bg-[#e0dcd2] text-[#524b42] text-[10px] font-bold tracking-widest px-3 py-1.5 rounded-xl border border-white/80 shadow-[inset_1px_1px_2px_rgba(0,0,0,0.06)]">
                  DAILY REPORTING
                </span>
              </div>

              <p className="text-sm text-[#5c554a] font-normal leading-relaxed max-w-xl mb-8">
                ระบบบันทึกและตรวจสอบผลการปฏิบัติงานรายวันของเจ้าหน้าที่องค์กรแบบเรียลไทม์ เพิ่มความแม่นยำและช่วยสรุปยอดขายของแต่ละแผนกอย่างเป็นระบบ
              </p>

              {/* 3D Visual Gauge / Stats Row (Inspired by Reference Image Donut & Cylinder Widgets) */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                
                {/* 3D Donut Chart Graphic Tile */}
                <div className="bg-[#e4e0d5] p-4 rounded-2xl border border-white/80 shadow-[inset_2px_2px_5px_rgba(0,0,0,0.05),inset_-2px_-2px_4px_rgba(255,255,255,0.8)] flex items-center gap-3">
                  <div className="relative w-12 h-12 rounded-full border-4 border-[#f07c53] border-t-[#64c4a7] border-r-[#d1cbbd] flex items-center justify-center shadow-md">
                    <div className="w-6 h-6 rounded-full bg-[#edebe4] shadow-inner" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase text-[#736a5c] block">อัตราการส่งยอด</span>
                    <span className="text-base font-extrabold text-[#1a1e28]">98.4%</span>
                  </div>
                </div>

                {/* 3D Bar Pillar Stat Tile */}
                <div className="bg-[#e4e0d5] p-4 rounded-2xl border border-white/80 shadow-[inset_2px_2px_5px_rgba(0,0,0,0.05),inset_-2px_-2px_4px_rgba(255,255,255,0.8)] flex items-center gap-3">
                  <div className="flex items-end gap-1 h-8 w-8 bg-[#d6d0c2] p-1.5 rounded-lg justify-center shadow-inner">
                    <div className="w-1.5 h-full bg-[#f07c53] rounded-sm" />
                    <div className="w-1.5 h-3/4 bg-[#64c4a7] rounded-sm" />
                    <div className="w-1.5 h-1/2 bg-[#526a78] rounded-sm" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase text-[#736a5c] block">อัปเดตวันนี้</span>
                    <span className="text-base font-extrabold text-[#1a1e28]">เรียลไทม์</span>
                  </div>
                </div>

                {/* Status Indicator Tile */}
                <div className="bg-[#e4e0d5] p-4 rounded-2xl border border-white/80 shadow-[inset_2px_2px_5px_rgba(0,0,0,0.05),inset_-2px_-2px_4px_rgba(255,255,255,0.8)] flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#64c4a7] text-[#0f2d24] flex items-center justify-center font-bold text-xs shadow-[0_4px_10px_rgba(100,196,167,0.4)]">
                    <Activity className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase text-[#736a5c] block">สถานะระบบ</span>
                    <span className="text-base font-extrabold text-[#1a1e28]">พร้อมใช้งาน</span>
                  </div>
                </div>

              </div>
            </div>

            {/* Direct CTA Tactile 3D Button */}
            <div className="pt-4 border-t border-[#d8d3c5] flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-xs text-[#736a5c] font-medium flex items-center gap-1.5">
                <Lock className="w-3.5 h-3.5 text-[#f07c53]" />
                ระบบความปลอดภัย SSL Encrypted
              </span>

              <button
                onClick={() => handleNavigate(
                  'https://staff-performance-tracking-db.vercel.app/',
                  'staff_performance_tracking_system',
                  'ระบบส่งยอดพนักงาน'
                )}
                className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-gradient-to-r from-[#f07c53] to-[#e66a3e] text-white font-bold text-sm shadow-[0_10px_25px_rgba(240,124,83,0.4),inset_1px_1px_2px_rgba(255,255,255,0.4)] hover:shadow-[0_14px_30px_rgba(240,124,83,0.5)] active:scale-95 transition-all duration-150 flex items-center justify-center gap-2 group cursor-pointer"
              >
                <span>เข้าสู่ระบบส่งยอดพนักงาน</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </button>
            </div>

          </motion.div>
        )}

        {/* ==================================================== */}
        {/* CARD 2: INSURANCE LICENSE MANAGEMENT (Slate Blue Clay) */}
        {/* ==================================================== */}
        {(activeTab === 'all' || activeTab === 'license') && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className={`bg-[#4d6270] text-white rounded-3xl p-8 md:p-10 shadow-[8px_16px_35px_rgba(0,0,0,0.4),inset_2px_2px_4px_rgba(255,255,255,0.25),inset_-2px_-2px_4px_rgba(0,0,0,0.2)] border border-[#647c8c] relative overflow-hidden flex flex-col justify-between min-h-[420px] ${
              activeTab === 'license' ? 'md:col-span-12' : 'md:col-span-5'
            }`}
          >
            {/* Soft Ambient Glow Overlay (Optimized for Safari) */}
            <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-[radial-gradient(circle_at_center,rgba(100,196,167,0.22)_0%,transparent_70%)] pointer-events-none" />

            <div>
              {/* Header Badge & Title */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-[#64c4a7] flex items-center justify-center text-[#0e3328] shadow-[0_6px_16px_rgba(100,196,167,0.4),inset_1px_1px_2px_rgba(255,255,255,0.5)]">
                    <FileCheck className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#a3e8d2]">
                      EASYBROKER HUB
                    </span>
                    <h2 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight">
                      จัดการใบอนุญาตประกัน
                    </h2>
                  </div>
                </div>

                <span className="bg-[#3b4e5b] text-[#b2c8d6] text-[10px] font-bold tracking-widest px-3 py-1.5 rounded-xl border border-[#597182] shadow-inner">
                  VERIFICATION
                </span>
              </div>

              <p className="text-sm text-[#d0dee8] font-normal leading-relaxed mb-8">
                ศูนย์กลางตรวจสอบสถานะ คัดกรอง และบันทึกข้อมูลใบอนุญาตนายหน้าประกันภัยอย่างเป็นระบบ รวดเร็ว และปลอดภัยสูงสุด
              </p>

              {/* 3D Tactile Circular Dial / Features Indicator */}
              <div className="bg-[#3e515d] p-5 rounded-2xl border border-[#576f7f] shadow-[inset_2px_2px_6px_rgba(0,0,0,0.25),inset_-2px_-2px_4px_rgba(255,255,255,0.08)] mb-8 flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  {/* 3D Tactile Raised Circle Knob */}
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#f2efe6] to-[#d3cebe] flex items-center justify-center shadow-[inset_2px_2px_3px_rgba(255,255,255,0.9),inset_-2px_-2px_3px_rgba(0,0,0,0.2),3px_6px_12px_rgba(0,0,0,0.3)]">
                    <ShieldCheck className="w-6 h-6 text-[#2f4350]" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-white block">EasyBroker Verification System</span>
                    <span className="text-[11px] text-[#9eb8c7]">ตรวจสอบสิทธิ์นายหน้าและวันหมดอายุ</span>
                  </div>
                </div>

                <div className="hidden sm:flex items-center gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#64c4a7] animate-pulse" />
                  <span className="text-xs font-semibold text-[#64c4a7]">Active</span>
                </div>
              </div>
            </div>

            {/* Direct CTA Tactile 3D Button */}
            <div className="pt-4 border-t border-[#3e515d] flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-xs text-[#a0b8c7] font-medium flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-[#64c4a7]" />
                ระบบคัดกรองข้อมูลมาตรฐานองค์กร
              </span>

              <button
                onClick={() => handleNavigate(
                  'https://staff-insurance-license.vercel.app/',
                  'insurance_license_system',
                  'ระบบจัดการใบอนุญาตประกัน'
                )}
                className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-gradient-to-r from-[#64c4a7] to-[#4aa88c] text-[#0c2b22] font-bold text-sm shadow-[0_10px_25px_rgba(100,196,167,0.35),inset_1px_1px_2px_rgba(255,255,255,0.5)] hover:shadow-[0_14px_30px_rgba(100,196,167,0.45)] active:scale-95 transition-all duration-150 flex items-center justify-center gap-2 group cursor-pointer"
              >
                <span>เข้าสู่ระบบ EasyBroker Hub</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </button>
            </div>

          </motion.div>
        )}

        {/* ==================================================== */}
        {/* LOWER BENTO ROW: STATS, QUICK ACTION & HEALTH CARDS */}
        {/* ==================================================== */}

        {/* Bento Box 3: 3D Donut Gauge Widget */}
        <div className="md:col-span-4 bg-[#1e232e] rounded-3xl p-6 border border-[#2d3444] shadow-[0_10px_25px_rgba(0,0,0,0.3)] flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#8e98a8]">
                SYSTEM CAPACITY
              </span>
              <div className="w-2.5 h-2.5 rounded-full bg-[#64c4a7]" />
            </div>

            <div className="flex items-center gap-5 my-2">
              {/* 3D Donut Wheel */}
              <div className="relative w-20 h-20 rounded-full bg-[#13161c] border-8 border-[#f07c53] border-t-[#64c4a7] border-l-[#526a78] flex items-center justify-center shadow-[inset_2px_2px_6px_rgba(0,0,0,0.6)]">
                <div className="w-8 h-8 rounded-full bg-[#1e232e] flex items-center justify-center text-[10px] font-bold text-white">
                  99%
                </div>
              </div>
              <div>
                <span className="text-xl font-bold text-white block">เสถียรภาพระบบ</span>
                <p className="text-xs text-[#8e98a8] mt-1">การเชื่อมต่อพร้อมใช้งาน 24/7 ไร้สะดุด</p>
              </div>
            </div>
          </div>

          <div className="mt-4 pt-4 border-t border-[#2d3444]/60 flex items-center justify-between text-xs text-[#8e98a8]">
            <span>ความเร็วการตอบสนอง</span>
            <span className="font-bold text-[#64c4a7]">12ms (Ultra Fast)</span>
          </div>
        </div>

        {/* Bento Box 4: Security & Support Quick Card */}
        <div className="md:col-span-4 bg-[#1e232e] rounded-3xl p-6 border border-[#2d3444] shadow-[0_10px_25px_rgba(0,0,0,0.3)] flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#f07c53]">
                HELP & SUPPORT
              </span>
              <HelpCircle className="w-4 h-4 text-[#8e98a8]" />
            </div>

            <h3 className="text-lg font-bold text-white mb-2">คู่มือและการช่วยเหลือ</h3>
            <p className="text-xs text-[#8e98a8] leading-relaxed">
              มีข้อสงสัยเกี่ยวกับการส่งยอดหรือการบันทึกใบอนุญาตนายหน้า? ติดต่อฝ่ายสนับสนุนไอทีหรือดาวน์โหลดคู่มือ
            </p>
          </div>

          <div className="mt-4 pt-4 border-t border-[#2d3444]/60 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <span className="text-xs text-[#8e98a8]">IT Support Contact</span>
            <a 
              href="mailto:Phanumars.bas@gmail.com"
              className="text-xs font-bold text-[#f07c53] bg-[#f07c53]/10 px-3 py-1.5 rounded-lg border border-[#f07c53]/20 hover:bg-[#f07c53]/20 transition-colors inline-flex items-center gap-1.5 w-fit"
            >
              Phanumars.bas@gmail.com
            </a>
          </div>
        </div>

        {/* Bento Box 5: User Access Security Status */}
        <div className="md:col-span-4 bg-[#1e232e] rounded-3xl p-6 border border-[#2d3444] shadow-[0_10px_25px_rgba(0,0,0,0.3)] flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#64c4a7]">
                SECURITY PROTOCOL
              </span>
              <Lock className="w-4 h-4 text-[#64c4a7]" />
            </div>

            <h3 className="text-lg font-bold text-white mb-2">เข้าใช้ในหน้าต่างเดิม</h3>
            <p className="text-xs text-[#8e98a8] leading-relaxed">
              ระบบได้รับการปรับแต่งให้นำทางในแท็บเดิม เพื่อป้องกันปัญหา Popup Blocker และรักษาสถานะล็อกอินให้ปลอดภัย
            </p>
          </div>

          <div className="mt-4 pt-4 border-t border-[#2d3444]/60 flex items-center justify-between text-xs text-[#8e98a8]">
            <span>สถานะการเชื่อมต่อ</span>
            <span className="font-bold text-white flex items-center gap-1.5">
              <div className="w-2 h-2 rounded-full bg-[#64c4a7]" />
              ปลอดภัยสูง
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
            className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 flex items-center gap-4 bg-[#edebe4] text-[#1a1e28] px-8 py-4 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.7)] border border-white"
          >
            <div className="w-3 h-3 rounded-full bg-[#f07c53] animate-ping" />
            <div className="text-xs">
              <span className="font-extrabold text-[#1a1e28] block">กำลังเชื่อมต่อไปยัง {navigatingTo}...</span>
              <p className="text-[11px] text-[#524b42] mt-0.5">ระบบจะปรับลิงก์เข้าหน้าต่างเดิม ป้องกันหน้าต่างซ้อนกันอย่างมีประสิทธิภาพ</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Footer */}
      <footer className="relative z-10 max-w-7xl mx-auto w-full mt-10 pt-6 border-t border-[#232834] flex flex-col sm:flex-row justify-between items-center gap-4 text-[11px] text-[#6b7688]">
        <div className="flex items-center gap-2">
          <ShieldCheck className="w-4 h-4 text-[#64c4a7]" />
          <span>ศูนย์บริการสารสนเทศกลาง Enterprise Portal • SSL Secured</span>
        </div>
        <div>
          © 2026 Enterprise Hub. All Rights Reserved.
        </div>
      </footer>

    </div>
  );
}
