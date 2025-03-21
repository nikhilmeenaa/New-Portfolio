import DashboardNavbar from '@/src/components/dashboardNavbar';
import classes from '@/src/styles/userProfileLayout.module.css';
export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={classes.dashboardLayoutContainer}>
      <div className={classes.navbar}>
        <DashboardNavbar isSearchFieldVisible={false} />
      </div>

      <div className={classes.dashboardChildren}>{children}</div>
      <div className={classes.fancyDesignShadowsRight}></div>
      <div className={classes.fancyDesignShadowsLeft}></div>
    </div>
  );
}
