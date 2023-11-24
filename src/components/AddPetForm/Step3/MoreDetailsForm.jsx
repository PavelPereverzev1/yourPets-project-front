import React from 'react';

import AddMoreDetailsForm from './AddMoreDetailsForm';
import SellMoreDetailsForm from './SellMoreDetailsForm';

const MoreDetailsForm = props => {
  console.log('MoredetailsForm-props.data', props.data.category);

  if (props.data.category === 'your pet') {
    return <AddMoreDetailsForm />;
  } else {
    return <SellMoreDetailsForm />;
  }
};

export default MoreDetailsForm;

// const formProps = useContext(FormContext);
// const {
//   formData,
//   handleChange,
//   currentStep,
//   totalSteps,
//   nextStep,
//   backStep,
//   handleSubmit,
// } = formProps;

//   return (
//     <>
//       {formData.category === 'your pet' ? (
//         <BackgroundCard>
//           <TitleComponent name="Add pet" />
//           <StepsBlock step={currentStep} />
//           <AddMoreDetailsForm
//             formData={formData}
//             handleChange={handleChange}
//             handleSubmit={handleSubmit}
//           />
//           <ButtonsBlock
//             currentStep={currentStep}
//             totalSteps={totalSteps}
//             nextStep={nextStep}
//             backStep={backStep}
//             handleSubmit={handleSubmit}
//           />
//         </BackgroundCard>
//       ) : (
//         <BackgroundCard width="882px">
//           <TitleComponent name="Add pet" />
//           <StepsBlock step={currentStep} />
//           <SellMoreDetailsForm
//             formData={formData}
//             handleChange={handleChange}
//             handleSubmit={handleSubmit}
//           />
//           <ButtonsBlock
//             currentStep={currentStep}
//             totalSteps={totalSteps}
//             nextStep={nextStep}
//             backStep={backStep}
//             handleSubmit={handleSubmit}
//           />
//         </BackgroundCard>
//       )}
//     </>
//   );
// };

// export default MoreDetailsForm;
