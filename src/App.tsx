import React from 'react';
import { 
  Phone, 
  ChevronRight, 
  ShieldCheck, 
  Award, 
  Zap, 
  Home, 
  Store, 
  CheckCircle2, 
  Calendar, 
  ClipboardCheck, 
  Search,
  MessageSquareText,
  Leaf,
  Bug,
  Mouse,
  Wind,
  Sparkles
} from 'lucide-react';
import { motion } from 'motion/react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

// Utility for tailwind classes
function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const Logo = ({ className }: { className?: string }) => (
  <div className={cn("flex items-center", className)}>
    <img 
      src="/logo.png" 
      alt="BUGSCO Logo" 
      className="h-10 sm:h-14 w-auto object-contain"
      referrerPolicy="no-referrer"
    />
  </div>
);

const AntIcon = ({ className }: { className?: string }) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    {/* Body parts */}
    <circle cx="12" cy="6" r="2" /> {/* Head */}
    <ellipse cx="12" cy="11" rx="2.5" ry="3" /> {/* Thorax */}
    <ellipse cx="12" cy="18" rx="3" ry="4" /> {/* Abdomen */}
    
    {/* Legs - Left */}
    <path d="M9.5 10 L6 9" />
    <path d="M9.5 12 L6 13" />
    <path d="M10 17 L7 19" />
    
    {/* Legs - Right */}
    <path d="M14.5 10 L18 9" />
    <path d="M14.5 12 L18 13" />
    <path d="M14 17 L17 19" />
    
    {/* Antennae */}
    <path d="M11 4 L9 2" />
    <path d="M13 4 L15 2" />
  </svg>
);

const Navbar = () => (
  <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between items-center h-16 sm:h-20">
        <Logo />
        <div className="flex items-center gap-4">
          <a 
            href="tel:1522-7678" 
            className="flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-full transition-colors font-bold text-sm sm:text-base shadow-lg shadow-red-500/20"
          >
            <Phone size={18} />
            <span>상담 1522-7678</span>
          </a>
        </div>
      </div>
    </div>
  </nav>
);

const Hero = () => (
  <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-gray-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 leading-tight mb-6">
            벅스코의 <span className="text-red-500">1회 시공</span><br />
            맞춤 방제 서비스를<br />
            경험하세요
          </h1>
          <p className="text-lg text-gray-600 mb-8 max-w-lg leading-relaxed">
            합리적인 가격으로 완벽한 해충 제거, 전문가의 꼼꼼하고 안전한 방제 노하우로 만족스러운 서비스를 제공합니다.
          </p>
          <button className="group flex items-center gap-2 bg-[#FEE500] hover:bg-[#FADA0A] text-black px-8 py-4 rounded-lg font-bold text-lg transition-all shadow-xl shadow-yellow-500/20">
            카카오톡 채널 상담하기
            <ChevronRight className="group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="aspect-[16/9] lg:aspect-[3/2] rounded-3xl overflow-hidden relative">
            <img 
              src="/hero-image.png?v=1" 
              alt="Pest Control Professional" 
              className="w-full h-full object-cover object-center"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/10 to-transparent" />
          </div>
          {/* Floating Badges */}
          <div className="absolute -bottom-6 left-0 right-0 flex justify-center sm:justify-start sm:-left-6 gap-4 hidden sm:flex">
            <div className="bg-white p-4 sm:p-6 rounded-2xl shadow-xl border border-gray-100">
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                  <ShieldCheck size={24} className="sm:w-7 sm:h-7" />
                </div>
                <div>
                  <p className="text-[10px] sm:text-xs text-gray-500 font-bold uppercase tracking-wider">Expertise</p>
                  <p className="text-sm sm:text-lg font-black text-gray-900 whitespace-nowrap">전문가의 맞춤방제시스템</p>
                </div>
              </div>
            </div>
            <div className="bg-white p-4 sm:p-6 rounded-2xl shadow-xl border border-gray-100">
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                  <Leaf size={24} className="sm:w-7 sm:h-7" />
                </div>
                <div>
                  <p className="text-[10px] sm:text-xs text-gray-500 font-bold uppercase tracking-wider">Safety</p>
                  <p className="text-sm sm:text-lg font-black text-gray-900 whitespace-nowrap">친환경 약제사용</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

const FeatureCard = ({ icon: Icon, title, description, delay }: { icon: any, title: string, description: string, delay: number }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl transition-all group"
  >
    <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
      <Icon size={28} />
    </div>
    <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
    <p className="text-gray-600 leading-relaxed text-sm">
      {description}
    </p>
  </motion.div>
);

const WhyUs = () => (
  <section className="py-24 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <p className="text-blue-600 font-bold tracking-widest uppercase text-sm mb-4">Services</p>
        <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-6">해충은 왜 벅스코인가요?</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          해충의 발생 요인과 서식지를 전문가가 정확히 진단, 확실한 해충박멸을 책임집니다.
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        <FeatureCard 
          icon={Award}
          title="전문성"
          description="10년 이상 경력자의 해충에 대한 전문적 지식과 방제 노하우로 성실하고 정확한 시공을 약속합니다."
          delay={0.1}
        />
        <FeatureCard 
          icon={ShieldCheck}
          title="안전성"
          description="허가받은 약제와 친환경 유인제를 사용합니다. 가정집에서도 안심하고 사용하세요."
          delay={0.2}
        />
        <FeatureCard 
          icon={Zap}
          title="서비스 품질"
          description="자체 개발한 종합방제시스템을 타사에 비해 저렴한 가격으로 제공합니다."
          delay={0.3}
        />
      </div>

      {/* Pest Icons Section */}
      <div className="mt-24 pt-16 border-t border-gray-100">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {[
            { icon: Bug, name: "바퀴벌레", color: "text-zinc-600", bg: "bg-zinc-50" },
            { icon: Mouse, name: "쥐", color: "text-zinc-600", bg: "bg-zinc-50" },
            { icon: AntIcon, name: "개미", color: "text-zinc-600", bg: "bg-zinc-50" },
            { icon: Wind, name: "비행해충", color: "text-zinc-600", bg: "bg-zinc-50" },
            { icon: Sparkles, name: "특수해충", color: "text-zinc-600", bg: "bg-zinc-50" },
          ].map((pest, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="flex flex-col items-center group cursor-pointer"
            >
              <div className={`w-20 h-20 ${pest.bg} rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-sm`}>
                <pest.icon className={`w-10 h-10 ${pest.color}`} />
              </div>
              <span className="text-lg font-bold text-gray-800 group-hover:text-blue-600 transition-colors">{pest.name}</span>
              <div className="mt-2 w-8 h-1 bg-transparent group-hover:bg-blue-600 transition-all rounded-full" />
            </motion.div>
          ))}
        </div>
        <p className="text-center text-gray-400 text-sm mt-12 italic">
          * 각 아이콘을 클릭하시면 해당 해충에 대한 자세한 방제 정보를 확인하실 수 있습니다. (준비 중)
        </p>
      </div>
    </div>
  </section>
);

const Step = ({ number, title, description, illustration }: { number: string, title: string, description: string, illustration?: React.ReactNode }) => (
  <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center py-12 border-b border-gray-100 last:border-0">
    <div className="flex gap-4 sm:gap-6">
      <span className="text-5xl sm:text-7xl font-black text-gray-100 italic select-none leading-none">{number}</span>
      <div>
        <h4 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">{title}</h4>
        <div className="text-gray-600 leading-relaxed whitespace-pre-line text-sm sm:text-base">
          {description}
        </div>
      </div>
    </div>
    {illustration && (
      <div className="relative aspect-[2/1] lg:aspect-[5/4] max-w-md mx-auto w-full">
        {illustration}
      </div>
    )}
  </div>
);

// Custom Illustration Components
const IllustrationWrapper = ({ children, bgColor }: { children: React.ReactNode, bgColor: string }) => (
  <div className={cn("w-full h-full rounded-3xl flex items-center justify-center p-8 sm:p-12 relative overflow-hidden shadow-inner", bgColor)}>
    <div className="absolute inset-0 opacity-10">
      <div className="absolute top-0 left-0 w-32 h-32 bg-white rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-48 h-48 bg-white rounded-full translate-x-1/3 translate-y-1/3" />
    </div>
    <div className="relative z-10 w-full h-full flex items-center justify-center">
      {children}
    </div>
  </div>
);

const ServiceSection = ({ type }: { type: 'residential' | 'commercial' }) => {
  const isResidential = type === 'residential';
  
  return (
    <section className={cn("py-16 sm:py-24", isResidential ? "bg-gray-50" : "bg-white")}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-10 sm:mb-16">
          <div className={cn("w-14 h-14 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center shrink-0", isResidential ? "bg-blue-100 text-blue-600" : "bg-indigo-100 text-indigo-600")}>
            {isResidential ? <Home size={32} /> : <Store size={32} />}
          </div>
          <div>
            <p className="text-xs sm:text-sm font-bold text-gray-500 uppercase tracking-widest mb-1">
              {isResidential ? "가정집 서비스" : "요식업소, 영업장 서비스"}
            </p>
            <h2 className="text-2xl sm:text-3xl font-black text-gray-900">
              <span className={isResidential ? "text-blue-600" : "text-indigo-600"}>
                {isResidential ? "1회 시공" : "정기관리"}
              </span> 맞춤 방제 서비스
            </h2>
          </div>
        </div>

        <div className="bg-white rounded-3xl p-6 sm:p-12 shadow-sm border border-gray-100">
          {isResidential ? (
            <>
              <Step 
                number="1"
                title="온라인 또는 전화 상담 및 초기 진단"
                description="고객님이 겪고 있는 해충 문제에 대해 상담을 진행합니다. 발생 위치, 발견 빈도, 주거 환경 등을 확인하여 해충 종류를 1차적으로 진단하고 방문 점검 일정을 안내드립니다."
                illustration={
                  <img 
                    src="/residential-step1.png?v=1" 
                    alt="상담 및 진단" 
                    className="w-full h-full object-cover rounded-3xl shadow-sm"
                    referrerPolicy="no-referrer"
                  />
                }
              />
              <Step 
                number="2"
                title="현장 방문 점검 및 맞춤 방제 시공"
                description="전문 방역 기술자가 방문하여 해충 발생 경로, 서식 환경, 오염 여부를 정밀 점검합니다. 점검 결과를 바탕으로 해충 서식지 제거, 유입 경로 차단, 환경에 맞는 약제 및 트랩 설치 등 맞춤 방제 작업을 진행합니다."
                illustration={
                  <img 
                    src="/residential-step2.png?v=1" 
                    alt="현장 방문 및 시공" 
                    className="w-full h-full object-cover rounded-3xl shadow-sm"
                    referrerPolicy="no-referrer"
                  />
                }
              />
              <Step 
                number="3"
                title="사후 관리 및 예방 안내"
                description="방제 작업 후 재발 방지를 위한 관리 방법과 생활 속 예방 수칙을 안내해 드립니다. 필요 시 추가 점검 또는 정기관리 상담도 가능합니다."
                illustration={
                  <img 
                    src="/residential-step3.png?v=1" 
                    alt="사후 관리" 
                    className="w-full h-full object-cover rounded-3xl shadow-sm"
                    referrerPolicy="no-referrer"
                  />
                }
              />
            </>
          ) : (
            <>
              <Step 
                number="1"
                title="상담 및 정기관리 계획 수립"
                description="전화 또는 온라인 상담을 통해 해충 발생 현황과 관리가 필요한 공간 규모를 확인합니다. 환경에 맞는 정기 관리 주기(월/분기 등)를 제안드립니다."
                illustration={
                  <img 
                    src="/commercial-step1.png?v=1" 
                    alt="상담 및 계획 수립" 
                    className="w-full h-full object-cover rounded-3xl shadow-sm"
                    referrerPolicy="no-referrer"
                  />
                }
              />
              <Step 
                number="2"
                title="현장 점검 및 방제 방법 확정"
                description="전문 방역 기술자가 현장을 방문하여 해충 발생 원인, 서식 가능 구역, 위생 및 환경 상태를 종합적으로 점검한 후 정기 관리 방제 계획을 확정합니다."
                illustration={
                  <img 
                    src="/commercial-step2.png?v=1" 
                    alt="현장 점검" 
                    className="w-full h-full object-cover rounded-3xl shadow-sm"
                    referrerPolicy="no-referrer"
                  />
                }
              />
              <Step 
                number="3"
                title="계약 체결 후 정기 방제 진행"
                description="정기 관리 계약 체결 후 정해진 일정에 따라 정기 점검 및 방제 작업을 실시합니다. 서식지 제거, 약제 도포 및 트랩 설치, 유입 경로 차단 작업을 통해 지속적으로 해충 발생을 예방합니다."
                illustration={
                  <img 
                    src="/commercial-step3.png?v=1" 
                    alt="정기 방제" 
                    className="w-full h-full object-cover rounded-3xl shadow-sm"
                    referrerPolicy="no-referrer"
                  />
                }
              />
              <Step 
                number="4"
                title="정기 점검 및 사후 관리"
                description="정기 방문 시 해충 발생 여부를 재점검하고 필요한 추가 방제 작업을 진행합니다. 또한 고객에게 위생 관리 및 해충 예방 방법을 안내하여 장기적으로 쾌적한 환경을 유지할 수 있도록 지원합니다."
                illustration={
                  <img 
                    src="/commercial-step4.png?v=1" 
                    alt="정기 점검 및 사후 관리" 
                    className="w-full h-full object-cover rounded-3xl shadow-sm"
                    referrerPolicy="no-referrer"
                  />
                }
              />
            </>
          )}
        </div>
      </div>
    </section>
  );
};

const Pricing = () => (
  <section className="py-24 bg-gray-900 text-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid md:grid-cols-2 gap-8">
        <motion.div 
          whileHover={{ y: -10 }}
          className="bg-white/5 backdrop-blur-lg p-10 rounded-3xl border border-white/10"
        >
          <div className="flex justify-between items-start mb-8">
            <div>
              <h3 className="text-2xl font-bold mb-2">해충퇴치</h3>
              <p className="text-gray-400 text-sm">가정집, 영업소</p>
            </div>
            <div className="bg-blue-600/20 text-blue-400 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
              One-time
            </div>
          </div>
          <div className="mb-8">
            <span className="text-5xl font-black">80,000~</span>
            <span className="text-gray-400 ml-2">/ 1회</span>
          </div>
          <ul className="space-y-4 mb-10">
            {[
              "평수와 환경에 따른 가격 결정",
              "1회 시공 or 월관리",
              "10가구 이상 동시방역 할인"
            ].map((item, i) => (
              <li key={i} className="flex items-center gap-3 text-gray-300">
                <CheckCircle2 size={18} className="text-blue-500" />
                {item}
              </li>
            ))}
          </ul>
          <a 
            href="https://m.blog.naver.com/bughunter119/221073752100" 
            target="_blank" 
            rel="noopener noreferrer"
            className="block w-full py-4 bg-white text-gray-900 rounded-xl font-bold hover:bg-gray-100 transition-colors text-center"
          >
            자세히보기
          </a>
        </motion.div>

        <motion.div 
          whileHover={{ y: -10 }}
          className="bg-white/5 backdrop-blur-lg p-10 rounded-3xl border border-white/10"
        >
          <div className="flex justify-between items-start mb-8">
            <div>
              <h3 className="text-2xl font-bold mb-2">정기 관리</h3>
              <p className="text-gray-400 text-sm">요식업소, 영업장</p>
            </div>
            <div className="bg-indigo-600/20 text-indigo-400 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
              Subscription
            </div>
          </div>
          <div className="mb-8">
            <span className="text-5xl font-black">50,000~</span>
            <span className="text-gray-400 ml-2">/ 월</span>
          </div>
          <ul className="space-y-4 mb-10">
            {[
              "현장 방문하여 맞춤식 견적 결정 및 시공방법 확정",
              "1회 시공 or 월관리",
              "장기관리 할인"
            ].map((item, i) => (
              <li key={i} className="flex items-center gap-3 text-gray-300">
                <CheckCircle2 size={18} className="text-indigo-500" />
                {item}
              </li>
            ))}
          </ul>
          <a 
            href="https://m.blog.naver.com/bughunter119/221073752100" 
            target="_blank" 
            rel="noopener noreferrer"
            className="block w-full py-4 bg-white text-gray-900 rounded-xl font-bold hover:bg-gray-100 transition-colors text-center"
          >
            자세히보기
          </a>
        </motion.div>
      </div>
    </div>
  </section>
);

const BlogSection = () => {
  const [blogPosts, setBlogPosts] = React.useState<any[]>([]);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    const fetchPosts = async () => {
      try {
        // Using rss2json API to bypass CORS and parse Naver RSS
        const rssUrl = 'https://rss.blog.naver.com/bughunter119.xml';
        const response = await fetch(`https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(rssUrl)}`);
        const data = await response.json();

        if (data.status === 'ok') {
          const posts = data.items.slice(0, 3).map((item: any) => {
            // Extract first image from description if thumbnail is missing
            let imageUrl = item.thumbnail;
            if (!imageUrl && item.description) {
              const imgMatch = item.description.match(/<img[^>]+src="([^">]+)"/);
              imageUrl = imgMatch ? imgMatch[1] : '/blog-post1.png'; // Fallback to local image
            }
            
            return {
              id: item.guid,
              title: item.title,
              excerpt: item.description.replace(/<[^>]*>?/gm, '').substring(0, 100) + '...',
              date: item.pubDate.split(' ')[0].replace(/-/g, '.'),
              image: imageUrl,
              link: item.link
            };
          });
          setBlogPosts(posts);
        }
      } catch (error) {
        console.error('Failed to fetch blog posts:', error);
        // Fallback data if fetch fails
        setBlogPosts([
          {
            id: 1,
            title: "아파트 바퀴벌레 퇴치 후기 - 주방 싱크대 하부 집중 방제",
            excerpt: "최근 기온이 올라가면서 아파트 내 바퀴벌레 출몰 신고가 늘고 있습니다. 이번 시공 사례는 싱크대 하부 서식지를 완벽히 제거한 사례입니다.",
            date: "2024.03.10",
            image: "/blog-post1.png",
            link: "https://blog.naver.com/bughunter119/"
          },
          {
            id: 2,
            title: "식당 정기관리의 중요성 - 위생 등급제를 위한 첫걸음",
            excerpt: "여름철 식중독 예방과 쾌적한 영업 환경을 위해 정기적인 방제는 필수입니다. 벅스코만의 체계적인 관리 시스템을 소개합니다.",
            date: "2024.03.05",
            image: "/blog-post2.png",
            link: "https://blog.naver.com/bughunter119/"
          },
          {
            id: 3,
            title: "개미 떼 출몰 해결법 - 원인 파악부터 확실한 박멸까지",
            excerpt: "한 번 생기면 좀처럼 없어지지 않는 개미, 군집의 핵심인 여왕개미를 타겟으로 하는 전문 약제 시공이 정답입니다.",
            date: "2024.02.28",
            image: "/blog-post3.png",
            link: "https://blog.naver.com/bughunter119/"
          }
        ]);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPosts();
  }, []);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-12">
          <div>
            <p className="text-blue-600 font-bold tracking-widest uppercase text-sm mb-4">Blog & News</p>
            <h2 className="text-3xl sm:text-4xl font-black text-gray-900">벅스코 소식 & 방제 팁</h2>
          </div>
          <a 
            href="https://blog.naver.com/bughunter119/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-600 hover:text-blue-600 font-bold transition-colors group"
          >
            블로그 전체보기
            <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {isLoading ? (
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="animate-pulse">
                <div className="bg-gray-200 aspect-[16/10] rounded-2xl mb-6" />
                <div className="h-6 bg-gray-200 rounded w-3/4 mb-4" />
                <div className="h-4 bg-gray-200 rounded w-full mb-2" />
                <div className="h-4 bg-gray-200 rounded w-2/3" />
              </div>
            ))}
          </div>
        ) : (
          <div className="grid md:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.a
                key={post.id}
                href={post.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group block"
              >
                <div className="relative aspect-[16/10] rounded-2xl overflow-hidden mb-6 shadow-md bg-gray-100">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = `/hero-image.png`;
                    }}
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-gray-900">
                    {post.date}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-1">
                  {post.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed line-clamp-2 mb-4">
                  {post.excerpt}
                </p>
                <span className="inline-flex items-center gap-1 text-blue-600 font-bold text-sm">
                  자세히 보기
                  <ChevronRight size={16} />
                </span>
              </motion.a>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="bg-black text-white py-16 border-t border-white/10">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 mb-12">
        <div className="col-span-1 lg:col-span-1">
          <div className="bg-white/10 p-4 rounded-xl backdrop-blur-sm inline-block mb-6">
            <Logo />
          </div>
          <p className="text-gray-400 text-sm leading-relaxed">
            전문 방역 서비스의 기준, 벅스코가 함께합니다.<br />
            해충으로부터 안전하고 쾌적한 환경을 약속드립니다.
          </p>
        </div>
        
        <div className="space-y-6">
          <h4 className="text-lg font-bold text-white border-l-4 border-red-500 pl-3">벅스코 본사</h4>
          <div className="space-y-2">
            <p className="text-gray-400 text-sm flex items-center gap-2">
              <Phone size={14} className="text-red-500" />
              대표번호: <span className="text-white font-bold">1522-7678</span>
            </p>
            <a 
              href="https://blog.naver.com/bughunter119/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
            >
              <MessageSquareText size={14} className="text-green-500" />
              공식 블로그 바로가기
            </a>
          </div>
        </div>

        <div className="space-y-6">
          <h4 className="text-lg font-bold text-white border-l-4 border-blue-500 pl-3">벅스코 안양센터</h4>
          <div className="space-y-2">
            <p className="text-gray-400 text-sm flex items-center gap-2">
              <Phone size={14} className="text-blue-500" />
              상담번호: <span className="text-white font-bold">1522-8916</span>
            </p>
            <a 
              href="https://blog.naver.com/uhmamama" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
            >
              <MessageSquareText size={14} className="text-green-500" />
              안양센터 블로그 바로가기
            </a>
          </div>
        </div>
      </div>
      
      <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between gap-4 text-[10px] sm:text-xs text-gray-600 uppercase tracking-widest font-bold">
        <p>Pest Control Expertise & Professional Hygiene Solutions</p>
        <p>© 2026 BUGSCO. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 selection:bg-blue-100 selection:text-blue-900">
      <Navbar />
      <main>
        <Hero />
        <WhyUs />
        <ServiceSection type="residential" />
        <ServiceSection type="commercial" />
        <Pricing />
        <BlogSection />
      </main>
      <Footer />
      
      {/* Quick Contact FAB for Mobile */}
      <div className="fixed bottom-6 right-6 z-50 sm:hidden">
        <a 
          href="tel:1522-7678"
          className="w-14 h-14 bg-red-500 text-white rounded-full flex items-center justify-center shadow-2xl animate-bounce"
        >
          <Phone size={24} />
        </a>
      </div>
    </div>
  );
}
