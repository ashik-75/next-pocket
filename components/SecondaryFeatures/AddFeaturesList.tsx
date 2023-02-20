import FData from "./FData";

function Feature({ title, content, icon: Icon }: any) {
  return (
    <div className="space-y-3 rounded-xl border p-5 ">
      <button className="relative">
        <span className="relative z-10">
          <Icon className=" h-7 w-7 text-neutral-500" />
        </span>
        {/* <div className=" absolute inset-0 -z-10  rounded-full bg-gray-600"></div> */}
      </button>
      <h4 className=" font-bold text-neutral-700">{title}</h4>
      <p className="text-neutral-600">{content.slice(0, 80)}</p>
    </div>
  );
}

function AddFeaturesList() {
  return (
    <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
      {FData.map((data) => (
        <Feature key={data.id} {...data} />
      ))}
    </div>
  );
}

export default AddFeaturesList;
