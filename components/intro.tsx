import { CMS_NAME } from "../lib/constants";

const Intro = () => {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
      <h1 className="text-3xl md:text-5xl font-bold tracking-tighter leading-tight md:pr-8">
        彰化縣登山協會
      </h1>
      <h4 className="text-center md:text-left text-3xl mt-5 md:pl-8">
        山域嚮導溯溪類別訓練與檢定
      </h4>
    </section>
  );
};

export default Intro;
