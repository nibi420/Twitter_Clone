function SidebarLink({ Icon, text, active }) {
  return (
    <div
      className={`text-[d9d9d9] flex items-center xl:justify-start space-x-3 hoverAnimation`}
    >
      <Icon className="h-10 text-white" />
      <span className="hidden xl:inline">{text}</span>
    </div>
  );
}

export default SidebarLink;
