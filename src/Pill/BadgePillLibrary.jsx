import BadgePill from "./BadgePill"

export default function BadgePillLibrary() {

  const badgeBackgroundColors = ["#F3F4F6", "#FEE2E2", "#FEF3C7", "#D1FAE5", "#DBEAFE", "#E0E7FF", "#EDE9FE", "#FCE7F3"]
  const badgeColors = ["#1F2937", "#991B1B", "#92400E", "#065F46", "#1E40AF", "#3730A3", "#5B21B6", "#9D174D" ]

  return (
    <div>
      <h2>Pill :</h2>
      <div className="badge-container">
        {badgeBackgroundColors.map((background, index) => (
          <BadgePill 
            key={index}
            background={background}
            color={badgeColors[index]}
          />
        ))}
      </div>
    </div>
  )
}