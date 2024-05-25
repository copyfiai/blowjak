import { useEffect, useRef } from "react";

const PieChart2 = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const width = canvas.width;
    const height = canvas.height;
    const centerX = width / 2;
    const centerY = height / 2;
    const reductionFactor = 0.8; // Reducing the size by 30%
    const outerRadius = (Math.min(width, height) / 2) * reductionFactor;
    const innerRadius = outerRadius / 1.5; // Adjust the inner radius for the doughnut hole

    // Define the proportions of the pie chart
    const proportions = [90, 10]; // Percentages for each segment
    const colors = ["#fb923c", "#0ea5e9"]; // Colors for each segment

    let startAngle = 0;
    let endAngle = 0;

    // Clear previous drawings
    ctx.clearRect(0, 0, width, height);

    // Draw each segment with fill and stroke
    proportions.forEach((percent, index) => {
      startAngle = endAngle;
      endAngle = startAngle + (percent / 100) * Math.PI * 2;

      ctx.beginPath();
      ctx.arc(centerX, centerY, outerRadius, startAngle, endAngle);
      ctx.arc(centerX, centerY, innerRadius, endAngle, startAngle, true);
      ctx.closePath();
      ctx.fillStyle = colors[index];
      ctx.fill();
      ctx.lineWidth = 4;
      ctx.strokeStyle = "black";
      ctx.stroke(); // Applying the stroke for each segment
    });

    // Optional: Draw an additional stroke around the whole chart to ensure a solid outline
    ctx.beginPath();
    ctx.arc(centerX, centerY, outerRadius, 0, Math.PI * 2);
    ctx.closePath();
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(centerX, centerY, innerRadius, 0, Math.PI * 2);
    ctx.closePath();
    ctx.stroke();
  }, []);

  return (
    <div className="w-80 h-80 relative">
      <canvas
        ref={canvasRef}
        role="img"
        height={700}
        width={700}
        style={{
          display: "block",
          boxSizing: "border-box",
          height: "350px",
          width: "350px",
          transform: "rotate(270deg)", // Correctly comment as rotating the chart by 90 degrees
        }}
      ></canvas>
      <div className="absolute w-[350px] h-[350px] rounded-full left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-transparent z-[1]"></div>
    </div>
  );
};

export default PieChart2;
