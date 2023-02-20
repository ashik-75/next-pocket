import SectionTitle from "../SectionTitle";
import AddFeaturesList from "./AddFeaturesList";

function SecondaryFeatures() {
  return (
    <section id="secondary-features" className="bg-slate-50 py-20 lg:py-28 ">
      <div className="mx-auto max-w-7xl space-y-20 px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Additional Features"
          content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
        accusantium obcaecati eligendi, saepe repellat rem quos optio voluptatem
        aperiam exercitationem!"
        />

        <AddFeaturesList />
      </div>
    </section>
  );
}

export default SecondaryFeatures;
