const StatCard = ({ defaultStats }) => {
  // const statsCards = [
  //   {
  //     title: "Active Jobs",
  //     value: defaultStats?.Active || 0,
  //     icon: "bolt",
  //     badgeIcon: "trending_up",
  //     badgeText: "+12% from last month",
  //     cardClass:
  //       "bg-white dark:bg-black border-4 border-on-surface shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:shadow-[8px_8px_0px_0px_#ffffff] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] dark:hover:shadow-[12px_12px_0px_0px_#ffffff]",
  //     cornerClass:
  //       "bg-primary-container border-on-surface opacity-50 group-hover:opacity-100",
  //     titleClass: "text-primary",
  //     iconClass: "text-primary",
  //     valueClass: "text-primary",
  //     badgeClass:
  //       "bg-primary-container border-on-surface text-on-primary-container shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] dark:shadow-[2px_2px_0px_0px_#ffffff]",
  //   },
  //   {
  //     title: "Urgent Fills",
  //     value: defaultStats?.Urgent || 0,
  //     icon: "priority_high",
  //     badgeIcon: "warning",
  //     badgeText: "High Priority Focus",
  //     cardClass:
  //       "bg-white dark:bg-black border-4 border-on-surface shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:shadow-[8px_8px_0px_0px_#ffffff] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] dark:hover:shadow-[12px_12px_0px_0px_#ffffff]",
  //     cornerClass:
  //       "bg-error border-on-surface opacity-20 group-hover:opacity-40",
  //     titleClass: "text-on-error-container",
  //     iconClass: "text-error",
  //     valueClass: "text-error",
  //     badgeClass:
  //       "bg-red-600 border-on-surface text-on-error shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] dark:shadow-[2px_2px_0px_0px_#ffffff]",
  //   },
  //   {
  //     title: "Total Closed",
  //     value: defaultStats?.Closed || 0,
  //     icon: "check_circle",
  //     badgeIcon: "verified",
  //     badgeText: "98% Success Rate",
  //     cardClass:
  //       "bg-white dark:bg-black border-4 border-on-surface shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:shadow-[8px_8px_0px_0px_#ffffff] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] dark:hover:shadow-[12px_12px_0px_0px_#ffffff]",

  //     cornerClass:
  //       "bg-[#3b4b37] border-on-surface opacity-30 group-hover:opacity-70",
  //     titleClass: "text-[#3b4b37]",
  //     iconClass: "text-[#3b4b37]",
  //     valueClass: "text-[#3b4b37]",
  //     badgeClass:
  //       "bg-surface border-on-surface text-on-surface shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] dark:shadow-[2px_2px_0px_0px_#ffffff]",
  //   },
  //   {
  //     title: "Pending",
  //     value: defaultStats?.Pending || 0,
  //     icon: "pending",
  //     badgeIcon: "schedule",
  //     badgeText: "Avg. 3D Wait Time",
  //     cardClass:
  //       "bg-white dark:bg-black border-4 border-on-surface shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:shadow-[8px_8px_0px_0px_#ffffff] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] dark:hover:shadow-[12px_12px_0px_0px_#ffffff]",
  //     cornerClass:
  //       "bg-amber-300 border-on-surface opacity-50 group-hover:opacity-100",
  //     titleClass: "text-amber-500",
  //     iconClass: "text-amber-500",
  //     valueClass: "text-amber-500",
  //     badgeClass:
  //       "bg-amber-300 border-on-surface text-on-surface shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] dark:shadow-[2px_2px_0px_0px_#ffffff]",
  //   },
  // ];

  const statsCards = [
    {
      title: "Active Jobs",
      value: defaultStats?.Active || 0,
      icon: "bolt",
      badgeIcon: "trending_up",
      badgeText: "+12% from last month",
      // Only unique color/opacity classes remain
      cornerClass: "bg-primary-container opacity-50 group-hover:opacity-100",
      titleClass: "text-primary",
      iconClass: "text-primary",
      valueClass: "text-primary",
      badgeClass: "bg-primary-container text-on-primary-container",
    },
    {
      title: "Urgent Fills",
      value: defaultStats?.Urgent || 0,
      icon: "priority_high",
      badgeIcon: "warning",
      badgeText: "High Priority Focus",
      cornerClass: "bg-error opacity-20 group-hover:opacity-40",
      titleClass: "text-on-error-container",
      iconClass: "text-error",
      valueClass: "text-error",
      badgeClass: "bg-red-600 text-on-error",
    },
    {
      title: "Total Closed",
      value: defaultStats?.Closed || 0,
      icon: "check_circle",
      badgeIcon: "verified",
      badgeText: "98% Success Rate",
      cornerClass: "bg-[#3b4b37] opacity-30 group-hover:opacity-70",
      titleClass: "text-[#3b4b37]",
      iconClass: "text-[#3b4b37]",
      valueClass: "text-[#3b4b37]",
      badgeClass: "bg-surface text-on-surface",
    },
    {
      title: "Pending",
      value: defaultStats?.Pending || 0,
      icon: "pending",
      badgeIcon: "schedule",
      badgeText: "Avg. 3D Wait Time",
      cornerClass: "bg-amber-300 opacity-50 group-hover:opacity-100",
      titleClass: "text-amber-500",
      iconClass: "text-amber-500",
      valueClass: "text-amber-500",
      badgeClass: "bg-amber-300 text-on-surface",
    },
  ];

  return (
    <>
      {statsCards.map((card) => {
        return (
          <div
            key={card.title}
            className={`stat-card-brutalist p-lg flex flex-col justify-between hover:-translate-y-1 hover:-translate-x-1 transition-all group relative overflow-hidden`}
          >
            <div
              className={`${card.cornerClass} absolute top-0 right-0 w-32 h-32 -mr-16 -mt-16 rotate-45 border-l-4 border-b-4 z-0 transition-opacity`}
            ></div>
            <div className="relative z-10 flex justify-between items-start mb-xl">
              <h2 className={`text-mono-label uppercase ${card.titleClass}`}>
                {card.title}
              </h2>
              <span
                className={`material-symbols-outlined ${card.iconClass} text-4xl`}
              >
                {card.icon}
              </span>
            </div>
            <div className="relative z-10">
              <div
                className={`font-heading text-[80px] leading-none font-black ${card.valueClass} tracking-tighter mb-sm`}
              >
                {card.value}
              </div>
              <div
                className={`inline-flex items-center gap-xs px-sm py-xs border-2 text-mono-data uppercase font-bold ${card.badgeClass}`}
              >
                <span className="material-symbols-outlined text-sm">
                  {card.badgeIcon}
                </span>
                {card.badgeText}
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default StatCard;
