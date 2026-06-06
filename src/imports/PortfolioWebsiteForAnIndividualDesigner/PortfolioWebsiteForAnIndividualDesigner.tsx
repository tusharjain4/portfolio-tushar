import svgPaths from "./svg-8dn84ra1dx";
import imgRectangle1 from "./c08d235f5a1076d6d106dfccc7087821a624b1d8.png";
import imgRectangle369 from "./51b9135be16d558d3cddcfc3b1342a7a8deda27c.png";
import imgRectangle370 from "./d6b4bbd3ba33021c6bf83b89b88e05dec771dc6f.png";
import imgRectangle371 from "./acddb3eb4105b5613512399d8ac4e85a7c22cb92.png";
import imgRectangle368 from "./41d09c40b70e4eb4850e792a57283db190809a39.png";

function LogoAppType() {
  return (
    <div className="content-stretch flex gap-[12px] h-[48px] items-center relative shrink-0" data-name="logo{-appType}">
      <p className="font-['Source_Serif_4:SemiBold',sans-serif] font-semibold leading-none relative shrink-0 text-[42px] text-black tracking-[-1.68px] whitespace-nowrap">TJ</p>
      <div className="flex h-[31.017px] items-center justify-center relative shrink-0 w-0" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "22" } as React.CSSProperties}>
        <div className="flex-none rotate-90">
          <div className="h-0 relative w-[31.017px]">
            <div className="absolute inset-[-1px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 31.0171 1">
                <line id="Line 1" stroke="var(--stroke-0, #E2E2E2)" x2="31.0171" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[28px] relative shrink-0 w-[26.583px]" data-name="Subtract">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26.583 28">
          <path d={svgPaths.p3f932980} fill="var(--fill-0, #21279D)" id="Subtract" />
        </svg>
      </div>
    </div>
  );
}

function PageLinks() {
  return (
    <div className="content-stretch flex font-['DotGothic16:Regular',sans-serif] gap-[32px] items-start leading-[32px] not-italic relative shrink-0 text-[28px] text-black tracking-[-0.28px] whitespace-nowrap" data-name="pageLinks">
      <p className="relative shrink-0">Home</p>
      <p className="relative shrink-0">Work</p>
      <p className="relative shrink-0">About</p>
    </div>
  );
}

function PersonalOrAgencyWebsiteHeader() {
  return (
    <div className="bg-white content-stretch flex items-center justify-between py-[16px] relative shrink-0 w-full z-[3]" data-name="Personal or Agency Website Header">
      <LogoAppType />
      <PageLinks />
      <div className="absolute bottom-0 h-0 left-[-80px] right-[-80px]" data-name="divider">
        <div className="absolute inset-[-0.5px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1504 1">
            <path d="M0 0.5H1504" id="divider" stroke="var(--stroke-0, black)" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame11() {
  return (
    <div className="bg-[#21279d] content-stretch flex h-full items-center justify-center px-[41px] relative rounded-[30px] shrink-0">
      <p className="font-['DotGothic16:Regular',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[65px] text-white tracking-[-1.3px] whitespace-nowrap">{`Software `}</p>
    </div>
  );
}

function Frame10() {
  return (
    <div className="h-[94px] mb-[-19px] relative rounded-[28px] shrink-0 w-full">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-center px-[24px] py-[8px] relative size-full">
          <div className="flex flex-row items-center self-stretch">
            <Frame11 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame13() {
  return (
    <div className="bg-[#21279d] content-stretch flex h-full items-center justify-center px-[41px] relative rounded-[30px] shrink-0">
      <p className="font-['DotGothic16:Regular',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[65px] text-white tracking-[-1.3px] whitespace-nowrap">Developer</p>
    </div>
  );
}

function Frame12() {
  return (
    <div className="h-[94px] mb-[-19px] relative rounded-[28px] shrink-0 w-full">
      <div className="flex flex-row items-center justify-end overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-end px-[24px] py-[8px] relative size-full">
          <div className="flex flex-row items-center self-stretch">
            <Frame13 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-col items-end justify-center pb-[19px] relative shrink-0 w-[582px]">
      <Frame10 />
      <Frame12 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex h-[169px] items-center justify-between relative shrink-0 w-full">
      <p className="font-['DotGothic16:Regular',sans-serif] leading-[120px] not-italic relative shrink-0 text-[171px] text-black tracking-[-3.42px] whitespace-nowrap">Hello</p>
      <Frame4 />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex font-['DotGothic16:Regular',sans-serif] h-[135px] items-start justify-between leading-[120px] not-italic relative shrink-0 text-[171px] text-black text-center tracking-[-3.42px] w-full whitespace-nowrap">
      <p className="overflow-hidden relative shrink-0 text-ellipsis">{`I’m `}</p>
      <p className="overflow-hidden relative shrink-0 text-ellipsis">Tushar Jain</p>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-[266px]">
      <p className="[text-decoration-skip-ink:none] decoration-solid font-['DotGothic16:Regular',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[39px] text-black tracking-[-0.78px] underline w-[162.699px]">Scroll to explore</p>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex gap-[30px] h-[239px] items-end relative shrink-0 w-full">
      <Frame3 />
      <div className="flex-[1_0_0] h-[431.447px] min-w-px relative">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgRectangle1} />
      </div>
      <p className="font-['Manrope:Regular',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[24px] text-black text-justify tracking-[-0.48px] w-[494.207px]">Tushar Jain is an Electronics and Communication Engineering student and a proficient Software Developer with a proven track record in designing and implementing scalable backend services, microservices, and optimizing API performance. Through extensive internship experience and diverse projects, Tushar has delivered robust, efficient solutions for ERP, healthcare platforms, and chat messaging systems. He is proficient in Python, JavaScript, Go, NestJS, and React, with hands-on experience across databases like MongoDB and PostgreSQL, cloud platforms (Azure, GCP), and CI/CD pipelines. Tushar also maintains a keen interest in AI/ML, continuously seeking innovative approaches to complex challenges.</p>
    </div>
  );
}

function PersonalOrCompanyWebsiteHomePageTitleSection() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[49px] items-start pb-[138px] pt-[48px] relative shrink-0 w-full z-[4]" data-name="Personal or Company Website Home Page Title Section">
      <Frame1 />
      <Frame />
      <Frame2 />
    </div>
  );
}

function Frame20() {
  return (
    <div className="content-stretch flex items-center py-[31px] relative shrink-0 w-full">
      <p className="font-['DotGothic16:Regular',sans-serif] leading-[68px] not-italic relative shrink-0 text-[39px] text-black tracking-[-0.78px] whitespace-nowrap">My works</p>
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex flex-col gap-[18px] items-start relative shrink-0 text-[14px] tracking-[2.38px]">
      <p className="relative shrink-0">MongoDB</p>
      <p className="relative shrink-0">Node</p>
      <p className="relative shrink-0">Express</p>
    </div>
  );
}

function Frame17() {
  return (
    <div className="content-stretch flex flex-col font-['Manrope:SemiBold',sans-serif] gap-[29px] items-start leading-[1.2] not-italic relative shrink-0 text-black uppercase whitespace-nowrap">
      <p className="relative shrink-0 text-[24px] tracking-[4.08px]">Contest-Saathi</p>
      <Frame16 />
    </div>
  );
}

function Frame18() {
  return (
    <div className="content-stretch flex items-start justify-between py-[36px] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#d8d8d8] border-solid border-t inset-0 pointer-events-none" />
      <Frame17 />
      <div className="h-[397.303px] relative shrink-0 w-[836.171px]">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
          <div className="absolute bg-[#d9d9d9] inset-0" />
          <img alt="" className="absolute max-w-none object-cover size-full" src={imgRectangle369} />
        </div>
      </div>
    </div>
  );
}

function Frame22() {
  return (
    <div className="content-stretch flex flex-col gap-[18px] items-start relative shrink-0 text-[14px] tracking-[2.38px]">
      <p className="relative shrink-0">Go</p>
      <p className="relative shrink-0">Cobra CLI</p>
      <p className="relative shrink-0">Gemini AI</p>
    </div>
  );
}

function Frame21() {
  return (
    <div className="content-stretch flex flex-col font-['Manrope:SemiBold',sans-serif] gap-[29px] items-start leading-[1.2] not-italic relative shrink-0 text-black uppercase whitespace-nowrap">
      <p className="relative shrink-0 text-[24px] tracking-[4.08px]">Insight Terminal</p>
      <Frame22 />
    </div>
  );
}

function Frame19() {
  return (
    <div className="content-stretch flex items-start justify-between py-[36px] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#d8d8d8] border-solid border-t inset-0 pointer-events-none" />
      <Frame21 />
      <div className="h-[397.303px] relative shrink-0 w-[836.171px]">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgRectangle370} />
      </div>
    </div>
  );
}

function Frame25() {
  return (
    <div className="content-stretch flex flex-col gap-[18px] items-start relative shrink-0 text-[14px] tracking-[2.38px]">
      <p className="relative shrink-0">Go</p>
      <p className="relative shrink-0">Cobra CLI</p>
      <p className="relative shrink-0">Gemini AI</p>
    </div>
  );
}

function Frame24() {
  return (
    <div className="content-stretch flex flex-col font-['Manrope:SemiBold',sans-serif] gap-[29px] items-start leading-[1.2] not-italic relative shrink-0 text-black uppercase whitespace-nowrap">
      <p className="relative shrink-0 text-[24px] tracking-[4.08px]">Insight Terminal</p>
      <Frame25 />
    </div>
  );
}

function Frame23() {
  return (
    <div className="content-stretch flex items-start justify-between py-[36px] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#d8d8d8] border-solid border-t inset-0 pointer-events-none" />
      <Frame24 />
      <div className="h-[397.303px] relative shrink-0 w-[836.171px]">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgRectangle371} />
      </div>
    </div>
  );
}

function PortfolioAboutSection() {
  return (
    <div className="bg-white relative shrink-0 w-full z-[3]" data-name="Portfolio About Section">
      <div className="content-stretch flex flex-col items-start overflow-clip py-[94px] relative rounded-[inherit] size-full">
        <Frame20 />
        <Frame18 />
        <Frame19 />
        <Frame23 />
      </div>
      <div aria-hidden="true" className="absolute border-b border-black border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function MaskGroup() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Mask group">
      <div className="bg-black col-1 h-[56.012px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[47px_47px] ml-0 mt-0 row-1 w-[50.393px]" style={{ maskImage: `url('${imgRectangle368}')` }} />
    </div>
  );
}

function Frame26() {
  return (
    <div className="bg-[#f1f1f1] content-stretch flex items-center justify-center relative rounded-[50px] shrink-0 size-[68px]">
      <MaskGroup />
    </div>
  );
}

function Frame27() {
  return (
    <div className="content-stretch flex flex-col gap-[18px] items-start leading-[1.2] not-italic relative shrink-0 text-black text-justify w-full">
      <p className="font-['Manrope:Bold',sans-serif] relative shrink-0 text-[24px] tracking-[-0.48px] w-full">Languages</p>
      <p className="font-['Manrope:Regular',sans-serif] relative shrink-0 text-[16px] tracking-[-0.32px] w-full">Tools: C++, Go, Python, JavaScript, TypeScript</p>
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex flex-col gap-[30px] items-start relative shrink-0 w-[312px]">
      <Frame26 />
      <Frame27 />
    </div>
  );
}

function MaskGroup1() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Mask group">
      <div className="bg-black col-1 h-[56.012px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[47px_47px] ml-0 mt-0 row-1 w-[50.393px]" style={{ maskImage: `url('${imgRectangle368}')` }} />
    </div>
  );
}

function Frame29() {
  return (
    <div className="bg-[#f1f1f1] content-stretch flex items-center justify-center relative rounded-[50px] shrink-0 size-[68px]">
      <MaskGroup1 />
    </div>
  );
}

function Frame30() {
  return (
    <div className="content-stretch flex flex-col gap-[18px] items-start leading-[1.2] not-italic relative shrink-0 text-black text-justify w-full">
      <p className="font-['Manrope:Bold',sans-serif] relative shrink-0 text-[24px] tracking-[-0.48px] w-full">Frameworks</p>
      <p className="font-['Manrope:Regular',sans-serif] relative shrink-0 text-[16px] tracking-[-0.32px] w-full">Tools: React, Node, Next, Angular, Express, Mocha, Tailwind CSS, Bootstrap, Jest, Material-UI</p>
    </div>
  );
}

function Frame28() {
  return (
    <div className="content-stretch flex flex-col gap-[30px] items-start relative shrink-0 w-[312px]">
      <Frame29 />
      <Frame30 />
    </div>
  );
}

function MaskGroup2() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Mask group">
      <div className="bg-black col-1 h-[56.012px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[47px_47px] ml-0 mt-0 row-1 w-[50.393px]" style={{ maskImage: `url('${imgRectangle368}')` }} />
    </div>
  );
}

function Frame32() {
  return (
    <div className="bg-[#f1f1f1] content-stretch flex items-center justify-center relative rounded-[50px] shrink-0 size-[68px]">
      <MaskGroup2 />
    </div>
  );
}

function Frame33() {
  return (
    <div className="content-stretch flex flex-col gap-[18px] items-start leading-[1.2] not-italic relative shrink-0 text-black text-justify w-full">
      <p className="font-['Manrope:Bold',sans-serif] relative shrink-0 text-[24px] tracking-[-0.48px] w-full">Databases</p>
      <p className="font-['Manrope:Regular',sans-serif] relative shrink-0 text-[16px] tracking-[-0.32px] w-full">Tools: MongoDB, PostgreSQL</p>
    </div>
  );
}

function Frame31() {
  return (
    <div className="content-stretch flex flex-col gap-[30px] items-start relative shrink-0 w-[312px]">
      <Frame32 />
      <Frame33 />
    </div>
  );
}

function MaskGroup3() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Mask group">
      <div className="bg-black col-1 h-[56.012px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[47px_47px] ml-0 mt-0 row-1 w-[50.393px]" style={{ maskImage: `url('${imgRectangle368}')` }} />
    </div>
  );
}

function Frame35() {
  return (
    <div className="bg-[#f1f1f1] content-stretch flex items-center justify-center relative rounded-[50px] shrink-0 size-[68px]">
      <MaskGroup3 />
    </div>
  );
}

function Frame36() {
  return (
    <div className="content-stretch flex flex-col gap-[18px] items-start leading-[1.2] not-italic relative shrink-0 text-black text-justify w-full">
      <p className="font-['Manrope:Bold',sans-serif] relative shrink-0 text-[24px] tracking-[-0.48px] w-full">Tools & Platforms</p>
      <p className="font-['Manrope:Regular',sans-serif] relative shrink-0 text-[16px] tracking-[-0.32px] w-full">Tools: Git, GitHub, CI/CD, Firebase, GCP, NGINX, Docker, Kubernetes, Azure, Digital Ocean Supabase</p>
    </div>
  );
}

function Frame34() {
  return (
    <div className="content-stretch flex flex-col gap-[30px] items-start relative shrink-0 w-[312px]">
      <Frame35 />
      <Frame36 />
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-start flex flex-wrap gap-y-[92px] items-start justify-between pr-[66px] relative shrink-0 w-[857px]">
      <Frame14 />
      <Frame28 />
      <Frame31 />
      <Frame34 />
    </div>
  );
}

function PortfolioAboutSection1() {
  return (
    <div className="bg-white relative shrink-0 w-full z-[2]" data-name="Portfolio About Section">
      <div className="content-stretch flex gap-[317px] items-start overflow-clip py-[94px] relative rounded-[inherit] size-full">
        <p className="font-['DotGothic16:Regular',sans-serif] leading-[68px] max-w-[900px] not-italic relative shrink-0 text-[39px] text-black tracking-[-0.78px] whitespace-nowrap">My Skills</p>
        <Frame15 />
      </div>
      <div aria-hidden="true" className="absolute border-b border-black border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Profile() {
  return (
    <div className="bg-[#f3f3f3] overflow-clip relative rounded-[999px] shrink-0 size-[48px]" data-name="profile">
      <div className="absolute left-[12px] overflow-clip size-[24px] top-[12.31px]" data-name="icon/building-2">
        <div className="absolute bottom-[8.33%] left-1/4 right-1/4 top-[8.33%]" data-name="Vector">
          <div className="absolute inset-[-5%_-8.33%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.0001 22">
              <path d={svgPaths.p2582fd80} id="Vector" stroke="var(--stroke-0, #21279D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </svg>
          </div>
        </div>
        <div className="absolute bottom-[8.33%] left-[8.32%] right-3/4 top-1/2" data-name="Vector">
          <div className="absolute inset-[-10%_-24.99%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.00222 12">
              <path d={svgPaths.p3307b500} id="Vector" stroke="var(--stroke-0, #21279D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </svg>
          </div>
        </div>
        <div className="absolute bottom-[8.33%] left-3/4 right-[8.33%] top-[37.49%]" data-name="Vector">
          <div className="absolute inset-[-7.69%_-25%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.00004 15.0022">
              <path d={svgPaths.p2a3f00c0} id="Vector" stroke="var(--stroke-0, #21279D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </svg>
          </div>
        </div>
        <div className="absolute bottom-3/4 left-[41.67%] right-[41.67%] top-1/4" data-name="Vector">
          <div className="absolute inset-[-1px_-25%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 2">
              <path d="M1 1H5" id="Vector" stroke="var(--stroke-0, #21279D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[41.67%_41.67%_58.33%_41.67%]" data-name="Vector">
          <div className="absolute inset-[-1px_-25%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 2">
              <path d="M1 1H5" id="Vector" stroke="var(--stroke-0, #21279D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[58.33%_41.67%_41.67%_41.67%]" data-name="Vector">
          <div className="absolute inset-[-1px_-25%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 2">
              <path d="M1 1H5" id="Vector" stroke="var(--stroke-0, #21279D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </svg>
          </div>
        </div>
        <div className="absolute bottom-1/4 left-[41.67%] right-[41.67%] top-3/4" data-name="Vector">
          <div className="absolute inset-[-1px_-25%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 2">
              <path d="M1 1H5" id="Vector" stroke="var(--stroke-0, #21279D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function TextContent() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start leading-[20px] min-w-px relative text-[15px] text-black" data-name="textContent">
      <p className="font-['Archivo:ExtraBold',sans-serif] font-extrabold relative shrink-0 w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        University of India
      </p>
      <p className="font-['Archivo:Regular',sans-serif] font-normal relative shrink-0 w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        1920 - 1924
      </p>
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="Container">
      <Profile />
      <TextContent />
    </div>
  );
}

function LineContainer() {
  return (
    <div className="relative self-stretch shrink-0 w-[48px]" data-name="Line Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48 120">
        <g id="Line Container">
          <path d="M24 0V120" id="line" stroke="var(--stroke-0, black)" />
        </g>
      </svg>
    </div>
  );
}

function QuoteContainer() {
  return (
    <div className="content-stretch flex gap-[12px] items-start opacity-80 pb-[8px] relative shrink-0 w-full" data-name="Quote Container">
      <LineContainer />
      <p className="flex-[1_0_0] font-['Archivo:Regular',sans-serif] font-normal leading-[24px] min-w-px relative text-[20px] text-black" style={{ fontVariationSettings: "'wdth' 100" }}>
        Architected and developed scalable backend services using NestJS, implementing modular architecture and REST APIs.
      </p>
    </div>
  );
}

function TestimonialCard() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="testimonialCard">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[16px] items-start p-[24px] relative size-full">
          <Container1 />
          <QuoteContainer />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-black border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Profile1() {
  return (
    <div className="bg-[#f3f3f3] overflow-clip relative rounded-[999px] shrink-0 size-[48px]" data-name="profile">
      <div className="absolute left-[12px] overflow-clip size-[24px] top-[12.31px]" data-name="icon/building-2">
        <div className="absolute bottom-[8.33%] left-1/4 right-1/4 top-[8.33%]" data-name="Vector">
          <div className="absolute inset-[-5%_-8.33%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.0001 22">
              <path d={svgPaths.p2582fd80} id="Vector" stroke="var(--stroke-0, #21279D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </svg>
          </div>
        </div>
        <div className="absolute bottom-[8.33%] left-[8.32%] right-3/4 top-1/2" data-name="Vector">
          <div className="absolute inset-[-10%_-24.99%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.00222 12">
              <path d={svgPaths.p3307b500} id="Vector" stroke="var(--stroke-0, #21279D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </svg>
          </div>
        </div>
        <div className="absolute bottom-[8.33%] left-3/4 right-[8.33%] top-[37.49%]" data-name="Vector">
          <div className="absolute inset-[-7.69%_-25%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.00004 15.0022">
              <path d={svgPaths.p2a3f00c0} id="Vector" stroke="var(--stroke-0, #21279D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </svg>
          </div>
        </div>
        <div className="absolute bottom-3/4 left-[41.67%] right-[41.67%] top-1/4" data-name="Vector">
          <div className="absolute inset-[-1px_-25%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 2">
              <path d="M1 1H5" id="Vector" stroke="var(--stroke-0, #21279D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[41.67%_41.67%_58.33%_41.67%]" data-name="Vector">
          <div className="absolute inset-[-1px_-25%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 2">
              <path d="M1 1H5" id="Vector" stroke="var(--stroke-0, #21279D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[58.33%_41.67%_41.67%_41.67%]" data-name="Vector">
          <div className="absolute inset-[-1px_-25%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 2">
              <path d="M1 1H5" id="Vector" stroke="var(--stroke-0, #21279D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </svg>
          </div>
        </div>
        <div className="absolute bottom-1/4 left-[41.67%] right-[41.67%] top-3/4" data-name="Vector">
          <div className="absolute inset-[-1px_-25%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 2">
              <path d="M1 1H5" id="Vector" stroke="var(--stroke-0, #21279D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function TextContent1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start leading-[20px] min-w-px relative text-[15px] text-black" data-name="textContent">
      <p className="font-['Archivo:ExtraBold',sans-serif] font-extrabold relative shrink-0 w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        University of India
      </p>
      <p className="font-['Archivo:Regular',sans-serif] font-normal relative shrink-0 w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        1920 - 1924
      </p>
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="Container">
      <Profile1 />
      <TextContent1 />
    </div>
  );
}

function LineContainer1() {
  return (
    <div className="relative self-stretch shrink-0 w-[48px]" data-name="Line Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48 120">
        <g id="Line Container">
          <path d="M24 0V120" id="line" stroke="var(--stroke-0, black)" />
        </g>
      </svg>
    </div>
  );
}

function QuoteContainer1() {
  return (
    <div className="content-stretch flex gap-[12px] items-start opacity-80 pb-[8px] relative shrink-0 w-full" data-name="Quote Container">
      <LineContainer1 />
      <p className="flex-[1_0_0] font-['Archivo:Regular',sans-serif] font-normal leading-[24px] min-w-px relative text-[20px] text-black" style={{ fontVariationSettings: "'wdth' 100" }}>
        Built Python-based microservices for PDF processing and asynchronous workflows.
      </p>
    </div>
  );
}

function TestimonialCard1() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="testimonialCard">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[16px] items-start p-[24px] relative size-full">
          <Container2 />
          <QuoteContainer1 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-black border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Frame37() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[21px] items-start min-w-px relative">
      <TestimonialCard />
      <TestimonialCard1 />
    </div>
  );
}

function PortfolioAboutSection2() {
  return (
    <div className="bg-white relative shrink-0 w-full z-[1]" data-name="Portfolio About Section">
      <div className="content-stretch flex gap-[317px] items-start overflow-clip py-[94px] relative rounded-[inherit] size-full">
        <p className="font-['DotGothic16:Regular',sans-serif] leading-[68px] max-w-[900px] not-italic relative shrink-0 text-[39px] text-black tracking-[-0.78px] whitespace-nowrap">My Journey</p>
        <Frame37 />
      </div>
      <div aria-hidden="true" className="absolute border-b border-black border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function MainContent() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col isolate items-start min-w-px relative z-[1]" data-name="Main Content">
      <PersonalOrCompanyWebsiteHomePageTitleSection />
      <PortfolioAboutSection />
      <PortfolioAboutSection1 />
      <PortfolioAboutSection2 />
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex isolate items-start py-[48px] relative shrink-0 w-full z-[2]" data-name="Container">
      <MainContent />
    </div>
  );
}

function PageLinks1() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="pageLinks">
      <p className="font-['DotGothic16:Regular',sans-serif] leading-[32px] not-italic relative shrink-0 text-[28px] text-black tracking-[-0.28px] whitespace-nowrap">© {new Date().getFullYear()} Tushar Jain. All rights reserved</p>
    </div>
  );
}

function ButtonLarge() {
  return (
    <div className="content-stretch flex items-center justify-center px-[24px] py-[12px] relative shrink-0" data-name="buttonLarge">
      <div aria-hidden="true" className="absolute border border-black border-solid inset-0 pointer-events-none" />
      <p className="font-['Archivo_Narrow:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[20px] text-black whitespace-nowrap">tusharwork4@gmail.com</p>
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
      <PageLinks1 />
      <ButtonLarge />
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full">
      <div className="bg-[#1436b4] shrink-0 size-[24.874px]" />
      <div className="bg-[#a6a6a6] shrink-0 size-[24.874px]" />
      <div className="shrink-0 size-[24.874px]" />
      <div className="shrink-0 size-[24.874px]" />
      <div className="shrink-0 size-[24.874px]" />
      <div className="shrink-0 size-[24.874px]" />
      <div className="shrink-0 size-[24.874px]" />
      <div className="bg-[#e3d2bd] shrink-0 size-[24.874px]" />
      <div className="shrink-0 size-[24.874px]" />
      <div className="shrink-0 size-[24.874px]" />
      <div className="bg-[#a6a6a6] shrink-0 size-[24.874px]" />
      <div className="bg-[#a6a6a6] shrink-0 size-[24.874px]" />
      <div className="shrink-0 size-[24.874px]" />
      <div className="shrink-0 size-[24.874px]" />
      <div className="bg-[#1436b4] shrink-0 size-[24.874px]" />
      <div className="shrink-0 size-[24.874px]" />
      <div className="shrink-0 size-[24.874px]" />
      <div className="bg-[#e3d2bd] shrink-0 size-[24.874px]" />
      <div className="shrink-0 size-[24.874px]" />
      <div className="shrink-0 size-[24.874px]" />
      <div className="shrink-0 size-[24.874px]" />
      <div className="bg-[#a6a6a6] shrink-0 size-[24.874px]" />
      <div className="bg-[#e3d2bd] shrink-0 size-[24.874px]" />
      <div className="shrink-0 size-[24.874px]" />
      <div className="shrink-0 size-[24.874px]" />
      <div className="shrink-0 size-[24.874px]" />
      <div className="bg-[#86c1f4] shrink-0 size-[24.874px]" />
      <div className="shrink-0 size-[24.874px]" />
      <div className="shrink-0 size-[24.874px]" />
      <div className="shrink-0 size-[24.874px]" />
      <div className="bg-[#e3d2bd] shrink-0 size-[24.874px]" />
      <div className="shrink-0 size-[24.874px]" />
      <div className="bg-[#1436b4] shrink-0 size-[24.874px]" />
      <div className="shrink-0 size-[24.874px]" />
      <div className="shrink-0 size-[24.874px]" />
      <div className="shrink-0 size-[24.874px]" />
      <div className="shrink-0 size-[24.874px]" />
      <div className="shrink-0 size-[24.874px]" />
      <div className="bg-[#86c1f4] shrink-0 size-[24.874px]" />
      <div className="bg-[#a6a6a6] shrink-0 size-[24.874px]" />
      <div className="shrink-0 size-[24.874px]" />
      <div className="shrink-0 size-[24.874px]" />
      <div className="bg-[#1436b4] shrink-0 size-[24.874px]" />
      <div className="bg-[#a6a6a6] shrink-0 size-[24.874px]" />
      <div className="shrink-0 size-[24.874px]" />
      <div className="shrink-0 size-[24.874px]" />
      <div className="shrink-0 size-[24.874px]" />
      <div className="bg-[#86c1f4] shrink-0 size-[24.874px]" />
      <div className="shrink-0 size-[24.874px]" />
      <div className="bg-[#a6a6a6] shrink-0 size-[24.874px]" />
      <div className="shrink-0 size-[24.874px]" />
      <div className="bg-[#1436b4] shrink-0 size-[24.874px]" />
      <div className="bg-[#86c1f4] shrink-0 size-[24.874px]" />
      <div className="shrink-0 size-[24.874px]" />
      <div className="shrink-0 size-[24.874px]" />
      <div className="shrink-0 size-[24.874px]" />
      <div className="bg-[#a6a6a6] shrink-0 size-[24.874px]" />
      <div className="shrink-0 size-[24.874px]" />
      <div className="shrink-0 size-[24.874px]" />
      <div className="bg-[#86c1f4] shrink-0 size-[24.874px]" />
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full">
      <div className="shrink-0 size-[24.874px]" />
      <div className="bg-[#e3d2bd] shrink-0 size-[24.874px]" />
      <div className="bg-[#a6a6a6] shrink-0 size-[24.874px]" />
      <div className="shrink-0 size-[24.874px]" />
      <div className="bg-[#1436b4] shrink-0 size-[24.874px]" />
      <div className="shrink-0 size-[24.874px]" />
      <div className="shrink-0 size-[24.874px]" />
      <div className="shrink-0 size-[24.874px]" />
      <div className="shrink-0 size-[24.874px]" />
      <div className="bg-[#1436b4] shrink-0 size-[24.874px]" />
      <div className="shrink-0 size-[24.874px]" />
      <div className="bg-[#e3d2bd] shrink-0 size-[24.874px]" />
      <div className="shrink-0 size-[24.874px]" />
      <div className="bg-[#1436b4] shrink-0 size-[24.874px]" />
      <div className="shrink-0 size-[24.874px]" />
      <div className="shrink-0 size-[24.874px]" />
      <div className="shrink-0 size-[24.874px]" />
      <div className="shrink-0 size-[24.874px]" />
      <div className="bg-[#1436b4] shrink-0 size-[24.874px]" />
      <div className="shrink-0 size-[24.874px]" />
      <div className="bg-[#86c1f4] shrink-0 size-[24.874px]" />
      <div className="shrink-0 size-[24.874px]" />
      <div className="shrink-0 size-[24.874px]" />
      <div className="shrink-0 size-[24.874px]" />
      <div className="bg-[#1436b4] shrink-0 size-[24.874px]" />
      <div className="shrink-0 size-[24.874px]" />
      <div className="shrink-0 size-[24.874px]" />
      <div className="bg-[#1436b4] shrink-0 size-[24.874px]" />
      <div className="shrink-0 size-[24.874px]" />
      <div className="bg-[#86c1f4] shrink-0 size-[24.874px]" />
      <div className="shrink-0 size-[24.874px]" />
      <div className="shrink-0 size-[24.874px]" />
      <div className="shrink-0 size-[24.874px]" />
      <div className="bg-[#1436b4] shrink-0 size-[24.874px]" />
      <div className="shrink-0 size-[24.874px]" />
      <div className="bg-[#e3d2bd] shrink-0 size-[24.874px]" />
      <div className="shrink-0 size-[24.874px]" />
      <div className="bg-[#1436b4] shrink-0 size-[24.874px]" />
      <div className="shrink-0 size-[24.874px]" />
      <div className="bg-[#1436b4] shrink-0 size-[24.874px]" />
      <div className="shrink-0 size-[24.874px]" />
      <div className="shrink-0 size-[24.874px]" />
      <div className="shrink-0 size-[24.874px]" />
      <div className="bg-[#1436b4] shrink-0 size-[24.874px]" />
      <div className="shrink-0 size-[24.874px]" />
      <div className="shrink-0 size-[24.874px]" />
      <div className="bg-[#e3d2bd] shrink-0 size-[24.874px]" />
      <div className="shrink-0 size-[24.874px]" />
      <div className="shrink-0 size-[24.874px]" />
      <div className="bg-[#a6a6a6] shrink-0 size-[24.874px]" />
      <div className="shrink-0 size-[24.874px]" />
      <div className="bg-[#1436b4] shrink-0 size-[24.874px]" />
      <div className="shrink-0 size-[24.874px]" />
      <div className="shrink-0 size-[24.874px]" />
      <div className="shrink-0 size-[24.874px]" />
      <div className="shrink-0 size-[24.874px]" />
      <div className="bg-[#1436b4] shrink-0 size-[24.874px]" />
      <div className="shrink-0 size-[24.874px]" />
      <div className="bg-[#e3d2bd] shrink-0 size-[24.874px]" />
      <div className="shrink-0 size-[24.874px]" />
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full">
      <div className="shrink-0 size-[24.874px]" />
      <div className="shrink-0 size-[24.874px]" />
      <div className="shrink-0 size-[24.874px]" />
      <div className="shrink-0 size-[24.874px]" />
      <div className="shrink-0 size-[24.874px]" />
      <div className="bg-[#1436b4] shrink-0 size-[24.874px]" />
      <div className="shrink-0 size-[24.874px]" />
      <div className="shrink-0 size-[24.874px]" />
      <div className="bg-[#86c1f4] shrink-0 size-[24.874px]" />
      <div className="shrink-0 size-[24.874px]" />
      <div className="shrink-0 size-[24.874px]" />
      <div className="shrink-0 size-[24.874px]" />
      <div className="bg-[#86c1f4] shrink-0 size-[24.874px]" />
      <div className="shrink-0 size-[24.874px]" />
      <div className="shrink-0 size-[24.874px]" />
      <div className="shrink-0 size-[24.874px]" />
      <div className="bg-[#1436b4] shrink-0 size-[24.874px]" />
      <div className="shrink-0 size-[24.874px]" />
      <div className="shrink-0 size-[24.874px]" />
      <div className="bg-[#1436b4] shrink-0 size-[24.874px]" />
      <div className="shrink-0 size-[24.874px]" />
      <div className="shrink-0 size-[24.874px]" />
      <div className="shrink-0 size-[24.874px]" />
      <div className="shrink-0 size-[24.874px]" />
      <div className="shrink-0 size-[24.874px]" />
      <div className="shrink-0 size-[24.874px]" />
      <div className="bg-[#e3d2bd] shrink-0 size-[24.874px]" />
      <div className="shrink-0 size-[24.874px]" />
      <div className="bg-[#e3d2bd] shrink-0 size-[24.874px]" />
      <div className="shrink-0 size-[24.874px]" />
      <div className="bg-[#a6a6a6] shrink-0 size-[24.874px]" />
      <div className="shrink-0 size-[24.874px]" />
      <div className="bg-[#86c1f4] shrink-0 size-[24.874px]" />
      <div className="shrink-0 size-[24.874px]" />
      <div className="shrink-0 size-[24.874px]" />
      <div className="shrink-0 size-[24.874px]" />
      <div className="shrink-0 size-[24.874px]" />
      <div className="shrink-0 size-[24.874px]" />
      <div className="bg-[#1436b4] shrink-0 size-[24.874px]" />
      <div className="shrink-0 size-[24.874px]" />
      <div className="bg-[#e3d2bd] shrink-0 size-[24.874px]" />
      <div className="shrink-0 size-[24.874px]" />
      <div className="shrink-0 size-[24.874px]" />
      <div className="bg-[#e3d2bd] shrink-0 size-[24.874px]" />
      <div className="shrink-0 size-[24.874px]" />
      <div className="shrink-0 size-[24.874px]" />
      <div className="shrink-0 size-[24.874px]" />
      <div className="bg-[#1436b4] shrink-0 size-[24.874px]" />
      <div className="shrink-0 size-[24.874px]" />
      <div className="shrink-0 size-[24.874px]" />
      <div className="bg-[#e3d2bd] shrink-0 size-[24.874px]" />
      <div className="shrink-0 size-[24.874px]" />
      <div className="shrink-0 size-[24.874px]" />
      <div className="bg-[#1436b4] shrink-0 size-[24.874px]" />
      <div className="shrink-0 size-[24.874px]" />
      <div className="bg-[#e3d2bd] shrink-0 size-[24.874px]" />
      <div className="shrink-0 size-[24.874px]" />
      <div className="bg-[#86c1f4] shrink-0 size-[24.874px]" />
      <div className="shrink-0 size-[24.874px]" />
      <div className="shrink-0 size-[24.874px]" />
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full">
      <div className="bg-[#86c1f4] shrink-0 size-[24.874px]" />
      <div className="shrink-0 size-[24.874px]" />
      <div className="bg-[#e3d2bd] shrink-0 size-[24.874px]" />
      <div className="shrink-0 size-[24.874px]" />
      <div className="shrink-0 size-[24.874px]" />
      <div className="bg-[#e3d2bd] shrink-0 size-[24.874px]" />
      <div className="shrink-0 size-[24.874px]" />
      <div className="bg-[#1436b4] shrink-0 size-[24.874px]" />
      <div className="bg-[#a6a6a6] shrink-0 size-[24.874px]" />
      <div className="shrink-0 size-[24.874px]" />
      <div className="bg-[#e3d2bd] shrink-0 size-[24.874px]" />
      <div className="shrink-0 size-[24.874px]" />
      <div className="bg-[#1436b4] shrink-0 size-[24.874px]" />
      <div className="shrink-0 size-[24.874px]" />
      <div className="shrink-0 size-[24.874px]" />
      <div className="bg-[#e3d2bd] shrink-0 size-[24.874px]" />
      <div className="shrink-0 size-[24.874px]" />
      <div className="shrink-0 size-[24.874px]" />
      <div className="bg-[#e3d2bd] shrink-0 size-[24.874px]" />
      <div className="shrink-0 size-[24.874px]" />
      <div className="bg-[#a6a6a6] shrink-0 size-[24.874px]" />
      <div className="shrink-0 size-[24.874px]" />
      <div className="shrink-0 size-[24.874px]" />
      <div className="bg-[#86c1f4] shrink-0 size-[24.874px]" />
      <div className="shrink-0 size-[24.874px]" />
      <div className="bg-[#1436b4] shrink-0 size-[24.874px]" />
      <div className="shrink-0 size-[24.874px]" />
      <div className="shrink-0 size-[24.874px]" />
      <div className="shrink-0 size-[24.874px]" />
      <div className="bg-[#1436b4] shrink-0 size-[24.874px]" />
      <div className="bg-[#e3d2bd] shrink-0 size-[24.874px]" />
      <div className="bg-[#1436b4] shrink-0 size-[24.874px]" />
      <div className="shrink-0 size-[24.874px]" />
      <div className="shrink-0 size-[24.874px]" />
      <div className="bg-[#1436b4] shrink-0 size-[24.874px]" />
      <div className="shrink-0 size-[24.874px]" />
      <div className="bg-[#a6a6a6] shrink-0 size-[24.874px]" />
      <div className="bg-[#a6a6a6] shrink-0 size-[24.874px]" />
      <div className="shrink-0 size-[24.874px]" />
      <div className="shrink-0 size-[24.874px]" />
      <div className="shrink-0 size-[24.874px]" />
      <div className="bg-[#1436b4] shrink-0 size-[24.874px]" />
      <div className="shrink-0 size-[24.874px]" />
      <div className="shrink-0 size-[24.874px]" />
      <div className="bg-[#1436b4] shrink-0 size-[24.874px]" />
      <div className="shrink-0 size-[24.874px]" />
      <div className="bg-[#1436b4] shrink-0 size-[24.874px]" />
      <div className="shrink-0 size-[24.874px]" />
      <div className="bg-[#86c1f4] shrink-0 size-[24.874px]" />
      <div className="shrink-0 size-[24.874px]" />
      <div className="shrink-0 size-[24.874px]" />
      <div className="shrink-0 size-[24.874px]" />
      <div className="shrink-0 size-[24.874px]" />
      <div className="bg-[#a6a6a6] shrink-0 size-[24.874px]" />
      <div className="bg-[#1436b4] shrink-0 size-[24.874px]" />
      <div className="shrink-0 size-[24.874px]" />
      <div className="shrink-0 size-[24.874px]" />
      <div className="shrink-0 size-[24.874px]" />
      <div className="bg-[#a6a6a6] shrink-0 size-[24.874px]" />
      <div className="bg-[#1436b4] shrink-0 size-[24.874px]" />
    </div>
  );
}

function Frame5() {
  return (
    <div className="absolute content-stretch flex flex-col inset-0 items-start overflow-clip">
      <Frame6 />
      <Frame7 />
      <Frame8 />
      <Frame9 />
    </div>
  );
}

function PersonalWebsiteFooter() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[24px] items-start overflow-clip pb-[24px] pt-[96px] relative shrink-0 w-full z-[1]" data-name="Personal Website Footer">
      <Container3 />
      <div className="flex items-center justify-center relative shrink-0">
        <div className="-scale-y-100 flex-none">
          <div className="h-[49px] relative w-[1344px]" data-name="squares">
            <Frame5 />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function PortfolioWebsiteForAnIndividualDesigner() {
  return (
    <div className="bg-white content-stretch flex flex-col isolate items-start px-[48px] relative size-full" data-name="portfolio website for an individual designer">
      <PersonalOrAgencyWebsiteHeader />
      <Container />
      <PersonalWebsiteFooter />
    </div>
  );
}