import classes from "./FirstPlan.module.scss";
import firstPlanImg from "../../assets/images/business.png";
import secondPlanImg from "../../assets/images/rightClinicImg.png";

export const FirstPlan = () => {
  return (
    <div className={classes.firstplan_wrapper}>
      <h1 className="title">1.1.Фаннинг предмети ва мазмуни</h1>
      <div className={classes.plan_container}>
        <div className={classes.left_plan_div}>
          <p>
            Маркетинг инсонлар ва жамоат эҳтиёжларини аниқлаш ва қондиришдан
            иборат. Маркетингнинг энг қисқа таърифларидан бири қуйидагидан
            иборат: “Маркетинг – бу эҳтиёжларни фойдали қондиришдир”. АҚШнинг
            маркетинг уюшмаси қуйидаги расмий таърифни келтиради: маркетинг – бу
            харидорлар учун қадриятларни яратиш, илдамлаш ва етказиш жараёнлар
            тўплами ва ташкилий функция бўлиб, улар билан ўзаро муносабатларини
            <img
              className={classes.enterImg}
              src={firstPlanImg}
              alt="Img bor"
            />
            бошқаришда ташкилотлар ёки манфаатдор кишилар фойдасини инобатга
            олишдан иборат. Алмашув жараёнларини бошқариш кўп меҳнат ва
            кўникмани талаб қилади. Маркетинг бошқаруви (маркетинг менежмент)
            потенциал алмашувда иштирок этувчиларнинг бирортаси
            контрагентларнинг истакларини рўёбга чиқарувчи воситани ишлаб чиқиб,
            фойдаланганидагина амалга ошади. Мазкур дарсликда маркетинг
            бошқаришни мақсадли бозорни танлаш, харидорларга уларга муҳим бўлган
            қадриятларни яратиш, тақдим этиш ва илдамлаш орқали уларни жалб
            этиш, сақлаш ва ривожлантириш санъати ва фани тариқасида
            ифодалаганмиз. Маркетинг таърифларини ижтимоий ва бошқарув
            йўналишларига тақсимлаш мумкин.
          </p>
        </div>
      </div>
    </div>
  );
};
export default FirstPlan;
