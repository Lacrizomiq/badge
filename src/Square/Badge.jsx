


export default function Badge({ background, color }) {

    const badgeStyle = {
        backgroundColor: background,
        padding: "2px 12px",
        color: color,
        fontWeight: "bold",
    }

    return (
        <div className="badge" style={badgeStyle}>Badge</div>
    )

}