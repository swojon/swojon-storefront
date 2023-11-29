"use client";
import { useDispatch, useSelector } from "react-redux";

const NotificationDrawer = () => {
  const dispatch = useDispatch();
  const isNotificationDrawerOpen = useSelector(
    (state: any) => state.notificationDrawer.open
  );
  return (
    <section
      className={`fixed top-0 z-[1000] lg:hidden w-full   transition delay-200 duration-700 ease-in-out notification-container ${
        isNotificationDrawerOpen ? "translate-x-0   " : "-translate-x-full "
      }`}
    >
      NotificationDrawer
    </section>
  );
};

export default NotificationDrawer;
