


export default function BadgePill({ background, color }) {

    const badgeStyle = {
        backgroundColor: background,
        padding: "2px 12px",
        color: color,
        fontWeight: "bold",
        borderRadius: "10px"
    }

    return (
        <div className="badge" style={badgeStyle}>Badge</div>
    )

}