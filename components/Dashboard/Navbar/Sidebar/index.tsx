export default function Sidebar() {
  return (
    <div className="bg-sky-900 w-60 p-3 flex flex-col">
      <div className="flex items-center gap-2 px-1 py-3">
        <span className="text-neutral-200 text-lg">san ryuu</span>
      </div>
      <div className="py-8 flex flex-1 flex-col gap-0.5"></div>
      <div className="flex flex-col gap-0.5 pt-2 border-t border-neutral-700">
        <div className="cursor-pointer text-red-500">
          <span className="text-xl"></span>
          Logout
        </div>
      </div>
    </div>
  );
}
