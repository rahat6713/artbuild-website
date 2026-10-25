export type IllustrativeProject = {
  id: string;
  title: { en: string; ar: string; zh: string };
  category: { en: string; ar: string; zh: string };
  summary: { en: string; ar: string; zh: string };
  image: string;
  alt: { en: string; ar: string; zh: string };
};

export const illustrativeProjects: IllustrativeProject[] = [
  {
    id: "residential-finishing",
    title: { en: "Residential Finishing Concept", ar: "تصور تشطيب سكني", zh: "住宅装饰概念" },
    category: { en: "Interior Finishing", ar: "تشطيب داخلي", zh: "室内装饰" },
    summary: {
      en: "A presentation concept showing how interior finishing, painting, flooring, and ceiling treatments can be arranged in a modern residential space.",
      ar: "تصور توضيحي يوضح كيفية ترتيب التشطيبات الداخلية والدهان والأرضيات والأسقف في مساحة سكنية حديثة.",
      zh: "展示现代住宅空间中如何安排室内装饰、油漆、地板和天花板处理的概念图。",
    },
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80",
    alt: { en: "Illustrative residential interior with finishing materials", ar: "داخلية سكنية توضيحية مع مواد تشطيب", zh: "带有装饰材料的住宅室内示意图" },
  },
  {
    id: "commercial-fitout",
    title: { en: "Commercial Fit-Out Layout", ar: "تصميم تجهيز تجاري", zh: "商业空间改造布局" },
    category: { en: "Fit-Out", ar: "تجهيز", zh: "空间改造" },
    summary: {
      en: "Illustrative room planning for commercial interiors, combining partitions, ceiling work, lighting, and flooring finishes.",
      ar: "تخطيط توضيحي للمساحات التجارية يجمع بين الحوائط والأسقف والإضاءة والأرضيات.",
      zh: "用于商业空间的示意规划，结合隔断、天花板、照明和地面装饰。",
    },
    image: "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=1200&q=80",
    alt: { en: "Illustrative office fit-out with ceiling and tiles", ar: "تجهيز مكتب توضيحي مع أسقف وبلاط", zh: "带有天花板和瓷砖的办公室示意图" },
  },
  {
    id: "villa-entryway",
    title: { en: "Villa Entrance Finishing", ar: "تشطيب مدخل فيلا", zh: "别墅入口装饰" },
    category: { en: "Exterior and Interior Finishing", ar: "تشطيب داخلي وخارجي", zh: "室内外装饰" },
    summary: {
      en: "An illustrative concept for a villa entrance area using feature materials, wall finishes, and wood detailing.",
      ar: "تصور توضيحي لمنطقة مدخل فيلا باستخدام مواد مميزة وتشطيب حوائط وتشطيبات خشبية.",
      zh: "别墅入口区域的示意概念图，结合特色材料、墙面处理与木饰面细节。",
    },
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80",
    alt: { en: "Illustrative villa entrance with wood and stone finishes", ar: "مدخل فيلا توضيحي مع تشطيبات خشبية وحجرية", zh: "带有木质和石材装饰的别墅入口示意图" },
  },
];
