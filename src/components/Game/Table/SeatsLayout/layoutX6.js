const generateLayout = () => {
    return (
        [0, 1, 2, 3 , 4, 5, 6 , 7].map(num => {
            const baseAngle = Math.PI / 3;
            const offset = 0;
            const finalAngle = num * baseAngle + offset;
            return {x: Math.cos(finalAngle), y: Math.sin(finalAngle)};
        })
    );
}

export default generateLayout;