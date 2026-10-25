export type ServiceDefinition = {
  slug: string;
  name: {
    en: string;
    ar: string;
    zh: string;
  };
  shortDescription: {
    en: string;
    ar: string;
    zh: string;
  };
  summary: {
    en: string;
    ar: string;
    zh: string;
  };
  applications: string[];
  customerNeeds: string[];
  image: string;
};

export const services: ServiceDefinition[] = [
  {
    slug: "building-contracting",
    name: { en: "Building Contracting", ar: "المقاولات العامة", zh: "建筑承包" },
    shortDescription: {
      en: "Execution of structural and finishing work for building requirements in Dubai.",
      ar: "تنفيذ أعمال البناء والتشطيب لتلبية متطلبات المشاريع في دبي.",
      zh: "为迪拜的建筑需求执行结构与装饰施工。",
    },
    summary: {
      en: "Responsible coordination of building works, scheduling, and project progress to support construction and finishing requirements.",
      ar: "تنسيق عملي ومتابعة سير المشاريع لضمان تنفيذ أعمال البناء والتشطيب وفق المتطلبات.",
      zh: "负责协调建筑工程、进度安排和项目推进，以支持施工与装饰需求。",
    },
    applications: [
      "Commercial and residential fit-outs",
      "Building improvements and finishing works",
      "Site coordination and contract execution",
    ],
    customerNeeds: [
      "Clear scope of works",
      "Project timeline and coordination",
      "Practical workmanship quality",
    ],
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80",
  },
  {
    slug: "plaster-works",
    name: { en: "Plaster Works", ar: "أعمال الدهانات والجبس", zh: "抹灰与涂装工程" },
    shortDescription: {
      en: "Interior and exterior plaster applications for smooth and durable surfaces.",
      ar: "تطبيقات الدهانات والجبس الداخلية والخارجية لتحقيق أسطح متينة ومسطحة.",
      zh: "用于室内外墙面的抹灰和修补，以实现平整耐用的表面。",
    },
    summary: {
      en: "Surface preparation and plastering to support final finishing, alignment, and durability across interior spaces.",
      ar: "إعداد الأسطح وتجهيزها قبل التشطيب النهائي لتعزيز الاستقامة والمتانة في المساحات الداخلية.",
      zh: "通过表面处理和抹灰，帮助实现最终装饰效果、平整度和耐用性。",
    },
    applications: [
      "Wall preparation and correction",
      "Interior finishing joints and surfaces",
      "Surface leveling before painting or tiling",
    ],
    customerNeeds: [
      "Smooth wall preparation",
      "Quality surface finish",
      "Consistent project coordination",
    ],
    image: "https://images.unsplash.com/photo-1523217582562-09d0def993a6?auto=format&fit=crop&w=1200&q=80",
  },
  {
    slug: "electrical-installation",
    name: { en: "Electrical Installation Works", ar: "أعمال التركيب الكهربائي", zh: "电气安装工程" },
    shortDescription: {
      en: "Installation and control equipment works for electrical systems and finishing projects.",
      ar: "أعمال تركيب وتجهيز معدات التحكم والكهرباء لأنظمة المشاريع والتشطيب.",
      zh: "为电气系统和装饰工程提供设备安装与控制施工。",
    },
    summary: {
      en: "Support for electrical installation and control equipment in line with site requirements and project coordination.",
      ar: "دعم أنظمة التركيبات الكهربائية ومعدات التحكم بما يتوافق مع متطلبات الموقع والتنسيق التنفيذي.",
      zh: "根据现场要求和项目协调，提供电气安装与控制设备支持。",
    },
    applications: [
      "Electrical installation works",
      "Control equipment integration",
      "Project wiring support",
    ],
    customerNeeds: [
      "Defined installation layout",
      "Clear technical requirements",
      "Reliable execution",
    ],
    image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=1200&q=80",
  },
  {
    slug: "floor-wall-tiling",
    name: { en: "Floor and Wall Tiling", ar: "تبليط الأرضيات والحوائط", zh: "地面与墙面瓷砖" },
    shortDescription: {
      en: "Tile installation for floors and walls in residential and commercial spaces.",
      ar: "تركيب البلاط للأرضيات والحوائط في المساحات السكنية والتجارية.",
      zh: "为住宅及商业空间进行地面和墙面的瓷砖施工。",
    },
    summary: {
      en: "Finishing work focused on alignment, layout planning, and neat tile execution for functional interior spaces.",
      ar: "أعمال تشطيب تركز على الدقة في التخطيط والتنسيق لتثبيت البلاط بشكل أنيق وعملي.",
      zh: "以对齐、布局和整洁施工为重点，提升室内功能空间的装修效果。",
    },
    applications: [
      "Bathrooms and kitchens",
      "Feature wall tiling",
      "Floor and wall finishing works",
    ],
    customerNeeds: [
      "Pattern and tile selection guidance",
      "Clean surface preparation",
      "Precise finishing",
    ],
    image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=80",
  },
  {
    slug: "painting",
    name: { en: "Painting Contracting", ar: "تغطية وتشطيب الطلاء", zh: "油漆施工" },
    shortDescription: {
      en: "Painting services for final surface protection and appearance improvement.",
      ar: "خدمات الطلاء للحماية النهائية وتحسين مظهر الأسطح.",
      zh: "用于最终表面保护与外观提升的油漆服务。",
    },
    summary: {
      en: "Surface preparation and painting support for clean, durable, and professional finishing across interior spaces.",
      ar: "إعداد السطح قبل الطلاء لتوفير تشطيب أنيق ومتناه ومناسب للمساحات الداخلية.",
      zh: "通过表面处理和油漆施工，确保室内空间的干净、耐用和专业效果。",
    },
    applications: [
      "Interior and exterior coating",
      "Surface renewal and repaint work",
      "Finishing coordination",
    ],
    customerNeeds: [
      "Surface readiness",
      "Color and finish consultation",
      "Professional workmanship",
    ],
    image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1200&q=80",
  },
  {
    slug: "sanitary-plumbing",
    name: { en: "Sanitary Installation and Pipe Repairs", ar: "تركيبات sanitaires وإصلاح المواسير", zh: "卫生洁具与管道维修" },
    shortDescription: {
      en: "Installation and repair of sanitary fittings and pipe-related works.",
      ar: "تركيب وصيانة تجهيزات sanitaires ومواسير الأنابيب ذات الصلة.",
      zh: "卫生洁具及相关管道的安装与维修。",
    },
    summary: {
      en: "Support for sanitary installation and repair tasks with careful execution based on site requirements.",
      ar: "دعم أعمال تركيب وصيانة التجهيزات الصحية وتنفيذ الإصلاحات وفق متطلبات الموقع.",
      zh: "根据现场要求进行卫生设施安装和维修，确保施工精细可靠。",
    },
    applications: [
      "Bathroom sanitary installation",
      "Pipe repair and maintenance",
      "Plumbing support for finishing works",
    ],
    customerNeeds: [
      "Repair and maintenance planning",
      "Clean installation execution",
      "Coordination with finishing trades",
    ],
    image: "https://images.unsplash.com/photo-1621905251918-48416bd8575a?auto=format&fit=crop&w=1200&q=80",
  },
  {
    slug: "interior-decoration",
    name: { en: "Decoration Design and Implementation", ar: "التصميم الداخلي والتنفيذ", zh: "室内装饰设计与施工" },
    shortDescription: {
      en: "Design-oriented decoration and implementation for interior spaces.",
      ar: "تصميم وتنفيذ تشطيبات داخلية مع مراعاة الأجواء والوظيفة.",
      zh: "以功能与审美为核心的室内装饰设计与实施。",
    },
    summary: {
      en: "Interior finishing concepts and execution aimed at practical design outcomes and cohesive room presentation.",
      ar: "تنفيذ أفكار التصميم الداخلي لتحقيق مظهر متكامل وعملي للمساحات المعمارية.",
      zh: "围绕功能与整体视觉效果，为空间提供专业的室内装饰方案和施工。",
    },
    applications: [
      "Interior finishing improvements",
      "Decorative and functional styling",
      "Space enhancement coordination",
    ],
    customerNeeds: [
      "Interior concept direction",
      "Material and finish review",
      "Coordinated execution",
    ],
    image: "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80",
  },
  {
    slug: "false-ceilings-partitions",
    name: { en: "False Ceilings and Lightweight Partitions", ar: "الأسقف المعلقة والحوائط الخفيفة", zh: "轻钢龙骨吊顶与隔断" },
    shortDescription: {
      en: "Installation of suspended ceilings and lightweight partitions for modern layouts.",
      ar: "تركيب الأسقف المعلقة والحوائط الخفيفة لتلبية التصاميم الحديثة.",
      zh: "为现代空间提供吊顶和轻质隔断安装服务。",
    },
    summary: {
      en: "Support for partition and ceiling solutions designed to improve room functionality and visual layout.",
      ar: "حلول أسقف وحوائط خفيفة تساهم في تحسين الاستخدام الداخلي ومظهر المساحة.",
      zh: "提供隔断与吊顶解决方案，提升空间功能和视觉效果。",
    },
    applications: [
      "Office and retail partitioning",
      "Suspended ceiling layouts",
      "Interior zoning and finishes",
    ],
    customerNeeds: [
      "Space planning support",
      "Clean installation quality",
      "Fit-out coordination",
    ],
    image: "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1200&q=80",
  },
  {
    slug: "carpentry-wood-flooring",
    name: { en: "Carpentry and Wood Flooring", ar: "الأعمال الخشبية والأرضيات الخشبية", zh: "木工与木地板" },
    shortDescription: {
      en: "Carpentry works and wood flooring for practical, elegant interior finishes.",
      ar: "أعمال النجارة والأرضيات الخشبية لتحقيق تشطيب داخلي أنيق وعملي.",
      zh: "为室内空间提供实用且优雅的木工和木地板施工。",
    },
    summary: {
      en: "Woodworking and flooring solutions designed for durability, appearance, and interior finish alignment.",
      ar: "حلول النجارة والأرضيات الخشبية التي توازن بين المتانة والمظهر التشطيبي.",
      zh: "以耐用性、外观和空间协调为重点，提供木工与地板解决方案。",
    },
    applications: [
      "Wood flooring installation",
      "Carpentry detailing and fit-out",
      "Interior finishing support",
    ],
    customerNeeds: [
      "Material and finish guidance",
      "Precise installation",
      "Quality detail workmanship",
    ],
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
  },
];

export const serviceIndex = Object.fromEntries(
  services.map((service) => [service.slug, service]),
) as Record<string, ServiceDefinition>;

export const allServiceSlugs = services.map((service) => service.slug);
