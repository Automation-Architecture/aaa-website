export function LandingMorningRealitySection() {
  return (
    <section className="border-x border-b border-brand-gray2 bg-brand-white mx-auto max-w-11/12">
      <div className="grid grid-cols-1 min-[1025px]:grid-cols-2">
        <div className="flex items-center justify-center bg-brand-black p-[1.25rem] min-[1025px]:h-[14.375rem] min-[1025px]:px-[3.75rem] min-[1280px]:py-0">
          <h2 className="w-full text-[1.75rem] font-medium uppercase leading-[1.15] tracking-[-0.125rem] text-brand-white min-[1280px]:text-[3.75rem] min-[1280px]:tracking-[-0.1875rem]">
            Now think about your actual morning
          </h2>
        </div>

        <div className="flex items-center justify-start bg-brand-white p-[1.25rem] min-[1025px]:h-57.5 min-[1025px]:border-r min-[1025px]:border-brand-gray2 min-[1025px]:px-[3.75rem] min-[1280px]:py-0">
          <p className="text-[1.25rem] font-medium uppercase leading-tight text-brand-black wide:text-[2.0625rem] min-[1280px]:leading-[2.625rem]">
            How many tabs?
            <br />
            How many logins?
            <br />
            How long before you get to the work that actually matters?
          </p>
        </div>
      </div>
    </section>
  );
}
