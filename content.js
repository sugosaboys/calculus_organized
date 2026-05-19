// Calculus Learning Platform - Content Data

const calculusContent = {
    modules: [
        {
            id: 1,
            title: "Pre-Calculus Foundations",
            description: "Essential mathematical foundations needed for calculus",
            lessons: [
                {
                    id: 1,
                    title: "Real Line, Decimals and Significant Figures",
                    concept: "Understanding the real number system and precision",
                    explanation: "The real number line is a way to represent all numbers we use in math - from whole numbers to decimals. Think of it like a ruler that extends infinitely in both directions, with zero in the middle. Numbers to the right are positive, numbers to the left are negative. When we write numbers like 3.14 or 0.025, we're using decimal notation to show parts of a whole.",
                    realWorldExample: "When measuring something like height (1.75m) or distance (0.5mm), we use decimals. The more decimal places we show, the more precise our measurement is - like how a ruler shows both centimeters and millimeters.",
                    keyPoints: [
                        "Real numbers include all integers, fractions, and non-repeating decimals",
                        "Significant figures tell us how precise a measurement is",
                        "The decimal point separates whole numbers from fractional parts",
                        "Zero is the reference point dividing positive and negative numbers"
                    ]
                },
                {
                    id: 2,
                    title: "Algebraic Expressions",
                    concept: "Manipulating symbolic mathematical statements",
                    explanation: "Algebra is using letters (like x or y) to represent unknown numbers. When we write 2x + 3, we're saying 'multiply x by 2 and add 3'. Algebraic expressions let us write general rules that work for any number. For example, the formula for a rectangle's area (length × width) works whether your rectangle is tiny or huge.",
                    realWorldExample: "If you buy items for $5 each and pay $2 shipping, the total cost is 5n + 2, where n is the number of items. This one expression tells us the cost for any number of items.",
                    keyPoints: [
                        "Variables (letters) represent unknown or changeable values",
                        "Combining like terms simplifies expressions",
                        "The order of operations matters: Parentheses, Exponents, Multiply/Divide, Add/Subtract",
                        "Expressions model real situations in a general way"
                    ]
                },
                {
                    id: 3,
                    title: "Theorem of Pythagoras and Square Root of Two",
                    concept: "Relationship between sides of right triangles",
                    explanation: "The Pythagorean theorem is a powerful rule: in any right triangle (a triangle with a 90-degree angle), if the two short sides are a and b, and the long side is c, then a² + b² = c². For example, if you have a 3-4-5 triangle: 3² + 4² = 9 + 16 = 25 = 5². This works for measuring distances in real life too.",
                    realWorldExample: "If you want to find the diagonal distance across a rectangular room that's 3m by 4m, you use the Pythagorean theorem: diagonal = √(3² + 4²) = √25 = 5m. Carpenters use this daily to square up buildings.",
                    keyPoints: [
                        "a² + b² = c² only works for right triangles (90-degree angles)",
                        "The square root (√) is the opposite of squaring - it undoes the squaring operation",
                        "Square root of 2 (√2) cannot be expressed as a simple fraction - it's irrational",
                        "This theorem connects geometry (shapes) with algebra (equations)"
                    ]
                },
                {
                    id: 4,
                    title: "Equations and Inequalities",
                    concept: "Finding unknowns and comparing values",
                    explanation: "An equation is like a balance scale - both sides must be equal. When we solve 2x + 3 = 11, we're finding what value of x makes this true. We do the same operation to both sides to keep them balanced, eventually isolating x. An inequality (using <, >, ≤, ≥) tells us when one side is bigger or smaller than the other.",
                    realWorldExample: "If a phone costs $30 plus a monthly bill of $x, and you have a budget of $100/month, the inequality is 30 + x ≤ 100, meaning x ≤ 70. You can spend up to $70 per month on the bill.",
                    keyPoints: [
                        "Equations state that two expressions are equal",
                        "To solve, perform the same operation on both sides to isolate the variable",
                        "Inequalities show when values are greater than, less than, or not equal",
                        "Solution sets for inequalities are often ranges, not single numbers"
                    ]
                },
                {
                    id: 5,
                    title: "Sign Diagrams",
                    concept: "Tracking where expressions are positive or negative",
                    explanation: "A sign diagram shows where an expression is positive, negative, or zero. It's like tracking the height of a ball - above ground (positive), on ground (zero), or below ground (negative). This is especially useful for products and quotients. For example, if you multiply (x-1)(x+2), you need to know which regions make this positive or negative.",
                    realWorldExample: "A company's profit/loss depends on pricing. If profit = (price-10)(price-20), a sign diagram shows when they make profit (positive) versus losses (negative) at different prices.",
                    keyPoints: [
                        "A sign diagram divides the number line into regions based on zeros",
                        "Test a value in each region to determine if the expression is positive or negative",
                        "Multiply or divide signs following the rules: positive × positive = positive, negative × negative = positive, positive × negative = negative",
                        "Critical points (zeros) change the sign of the expression"
                    ]
                },
                {
                    id: 6,
                    title: "Distance and Absolute Value",
                    concept: "Measuring magnitude without regard to direction",
                    explanation: "Absolute value (written |x|) is the distance from zero on the number line - always positive or zero. So |5| = 5 and |-5| = 5 (both are 5 units from zero). It ignores the sign. The distance between any two points on a line equals the absolute value of their difference. So the distance from 3 to 8 is |8-3| = 5.",
                    realWorldExample: "Temperature changes: if it drops from 5°C to -3°C, the change is |-3-5| = 8 degrees. We don't say it dropped by negative 8 degrees; we say 8 degrees.",
                    keyPoints: [
                        "|x| always gives a non-negative result",
                        "Distance between points a and b is |b-a|",
                        "The absolute value removes the sign information but keeps magnitude",
                        "Equations like |x| = 5 have two solutions: x = 5 or x = -5"
                    ]
                },
                {
                    id: 7,
                    title: "Coordinate Systems",
                    concept: "Locating points in 2D and 3D space",
                    explanation: "A coordinate system (like a map grid) lets us locate any point using numbers. In 2D, we use (x,y) coordinates: x tells how far right/left, y tells how far up/down. The point (3,2) means 3 units right and 2 units up from the origin (0,0). This system is named after René Descartes, so it's also called Cartesian coordinates.",
                    realWorldExample: "GPS uses coordinates: latitude and longitude tell exactly where you are on Earth. Video game positions use (x,y,z) coordinates to place characters in 3D space.",
                    keyPoints: [
                        "The origin (0,0) is where the axes intersect",
                        "The x-axis runs horizontally, the y-axis runs vertically",
                        "Coordinates (x,y) always list x first, then y",
                        "This connects geometry (shapes) to algebra (equations) - the power of analytic geometry"
                    ]
                },
                {
                    id: 8,
                    title: "Lines and Circles in the Plane",
                    concept: "Equations describing geometric shapes",
                    explanation: "A line is perfectly straight and extends infinitely. Its equation is usually y = mx + b, where m is the slope (steepness) and b is the y-intercept (where it crosses the y-axis). A circle is all points at the same distance from a center point. Its equation is (x-h)² + (y-k)² = r², where (h,k) is the center and r is the radius.",
                    realWorldExample: "A ladder leaning against a wall traces a line. A ferris wheel with a center 20m above ground and 15m radius has equation (x-0)² + (y-20)² = 15².",
                    keyPoints: [
                        "Line equation y = mx + b: m is slope (rise/run), b is y-intercept",
                        "Slope = (y₂-y₁)/(x₂-x₁) for any two points on the line",
                        "Circle equation (x-h)² + (y-k)² = r²: center is (h,k), radius is r",
                        "Distance formula: distance between points = √[(x₂-x₁)² + (y₂-y₁)²]"
                    ]
                }
            ],
            quiz: {
                questions: [
                    {
                        id: 1,
                        text: "What is the purpose of the real number line?",
                        type: "multiple-choice",
                        options: [
                            { text: "To represent all numbers used in mathematics", correct: true },
                            { text: "To only show integers", correct: false },
                            { text: "To measure time", correct: false },
                            { text: "To display fractions only", correct: false }
                        ],
                        explanation: "The real number line represents all real numbers - integers, fractions, decimals, and irrational numbers like π."
                    },
                    {
                        id: 2,
                        text: "In the Pythagorean theorem a² + b² = c², what does c represent?",
                        type: "multiple-choice",
                        options: [
                            { text: "The longest side (hypotenuse) of a right triangle", correct: true },
                            { text: "One of the short sides", correct: false },
                            { text: "The area of the triangle", correct: false },
                            { text: "The angle measure", correct: false }
                        ],
                        explanation: "In the Pythagorean theorem, c always represents the hypotenuse (longest side) of the right triangle, opposite the 90-degree angle."
                    },
                    {
                        id: 3,
                        text: "What does the absolute value |x| represent?",
                        type: "multiple-choice",
                        options: [
                            { text: "The distance from zero on the number line", correct: true },
                            { text: "A negative number", correct: false },
                            { text: "The reciprocal of x", correct: false },
                            { text: "The square of x", correct: false }
                        ],
                        explanation: "Absolute value gives the distance from zero, always non-negative. For example, |-5| = 5."
                    },
                    {
                        id: 4,
                        text: "In coordinate system (x,y), what does x represent?",
                        type: "multiple-choice",
                        options: [
                            { text: "Distance right or left from the origin", correct: true },
                            { text: "Distance up or down", correct: false },
                            { text: "The radius of a circle", correct: false },
                            { text: "A constant value", correct: false }
                        ],
                        explanation: "In the coordinate system, x represents the horizontal distance (left is negative, right is positive) from the origin."
                    },
                    {
                        id: 5,
                        text: "What is the equation form for a line?",
                        type: "multiple-choice",
                        options: [
                            { text: "y = mx + b", correct: true },
                            { text: "x² + y² = r²", correct: false },
                            { text: "a² + b² = c²", correct: false },
                            { text: "2x + 3 = 7", correct: false }
                        ],
                        explanation: "The standard form for a line equation is y = mx + b, where m is the slope and b is the y-intercept."
                    },
                    {
                        id: 6,
                        text: "How many solutions does the equation |x| = 5 have?",
                        type: "multiple-choice",
                        options: [
                            { text: "Two solutions: x = 5 or x = -5", correct: true },
                            { text: "One solution: x = 5", correct: false },
                            { text: "No solutions", correct: false },
                            { text: "Infinite solutions", correct: false }
                        ],
                        explanation: "Since absolute value is distance from zero, |x| = 5 means x is 5 units away from zero, which gives two solutions: x = 5 (right) or x = -5 (left)."
                    },
                    {
                        id: 7,
                        text: "What does a sign diagram help determine?",
                        type: "multiple-choice",
                        options: [
                            { text: "Where an expression is positive, negative, or zero", correct: true },
                            { text: "The value of a variable", correct: false },
                            { text: "The slope of a line", correct: false },
                            { text: "The radius of a circle", correct: false }
                        ],
                        explanation: "Sign diagrams show the regions where an expression is positive, negative, or zero by testing values in each interval."
                    },
                    {
                        id: 8,
                        text: "What is significant about √2 (square root of 2)?",
                        type: "multiple-choice",
                        options: [
                            { text: "It cannot be expressed as a simple fraction (it's irrational)", correct: true },
                            { text: "It equals 1.5", correct: false },
                            { text: "It is a whole number", correct: false },
                            { text: "It is the same as 1/2", correct: false }
                        ],
                        explanation: "√2 is an irrational number - it cannot be written as a ratio of two integers. Its decimal representation goes on forever without repeating."
                    },
                    {
                        id: 9,
                        text: "In the equation of a circle (x-h)² + (y-k)² = r², what is (h,k)?",
                        type: "multiple-choice",
                        options: [
                            { text: "The center of the circle", correct: true },
                            { text: "A point on the circle", correct: false },
                            { text: "The radius", correct: false },
                            { text: "The slope", correct: false }
                        ],
                        explanation: "In the circle equation (x-h)² + (y-k)² = r², the point (h,k) is the center of the circle."
                    },
                    {
                        id: 10,
                        text: "What does it mean to 'solve' an equation like 2x + 3 = 11?",
                        type: "multiple-choice",
                        options: [
                            { text: "Find the value of x that makes the equation true", correct: true },
                            { text: "Add all the numbers", correct: false },
                            { text: "Calculate 2 × 3", correct: false },
                            { text: "Graph the equation", correct: false }
                        ],
                        explanation: "Solving an equation means finding the value(s) of the variable that make the equation true. For 2x + 3 = 11, we find x = 4."
                    }
                ]
            }
        },
        {
            id: 2,
            title: "Functions",
            description: "Understanding relationships and their properties",
            lessons: [
                {
                    id: 1,
                    title: "Functions as Rules",
                    concept: "Input-output relationships",
                    explanation: "A function is like a machine: put something in, get something out. It's a rule that connects inputs (often called x) to outputs (often called y). Write it as f(x) = output. Each input has exactly one output - this is the key rule. For example, f(x) = 2x means 'take the input, multiply by 2, that's your output'. If x=3, then f(3) = 6.",
                    realWorldExample: "A vending machine is a function: input your money, it outputs the item you selected. Or: a recipe is a function - input ingredients, output a meal. Temperature conversion: F(C) = 1.8C + 32 converts Celsius to Fahrenheit.",
                    keyPoints: [
                        "A function has exactly one output for each input",
                        "Notation f(x) means 'function f evaluated at x'",
                        "The domain is the set of all possible inputs",
                        "The range is the set of all possible outputs"
                    ]
                },
                {
                    id: 2,
                    title: "Parabolas and Quadratics",
                    concept: "U-shaped curves and their equations",
                    explanation: "A quadratic function has the form f(x) = ax² + bx + c. The graph is U-shaped (if a > 0) or inverted-U (if a < 0), called a parabola. The highest or lowest point is the vertex. Quadratics appear everywhere in physics - the path of a thrown ball is a parabola.",
                    realWorldExample: "Throwing a ball upward: its height at time t is h(t) = -5t² + 20t + 2, a quadratic. The graph is an inverted U because gravity pulls down (negative). The vertex tells when the ball reaches maximum height.",
                    keyPoints: [
                        "Standard form: f(x) = ax² + bx + c",
                        "If a > 0, parabola opens upward; if a < 0, opens downward",
                        "Vertex is the highest (max) or lowest (min) point",
                        "Axis of symmetry is vertical line through vertex"
                    ]
                },
                {
                    id: 3,
                    title: "Quadratic Formula",
                    concept: "Solving quadratic equations",
                    explanation: "The quadratic formula solves any equation of form ax² + bx + c = 0. It's x = [-b ± √(b²-4ac)] / (2a). Don't memorize it - understand that it uses the coefficients to find where the parabola crosses the x-axis (the roots or zeros). The part under the square root (b²-4ac) determines if there are real solutions.",
                    realWorldExample: "In ballistics, finding when a projectile hits the ground uses the quadratic formula. When height = 0, solve -5t² + 100t + 5 = 0 to find the time of impact.",
                    keyPoints: [
                        "Formula: x = [-b ± √(b²-4ac)] / (2a)",
                        "The discriminant b²-4ac determines the number of real solutions",
                        "Two solutions if discriminant > 0, one if = 0, none if < 0",
                        "The ± means there are usually two solutions"
                    ]
                },
                {
                    id: 4,
                    title: "Polynomial and Power Functions",
                    concept: "Higher-degree polynomial equations",
                    explanation: "Polynomials are sums of terms like 5x³ - 2x² + 7x - 3. The degree (highest exponent) tells the shape and number of turns. Degree 1 is a line, degree 2 is a parabola, degree 3 has one turn, etc. Power functions have form f(x) = x^n where n is constant - simple but important building blocks.",
                    realWorldExample: "Volume of a cube V = x³ is a power function (degree 3). Surface area formulas are polynomials. Profit functions in business are often polynomials.",
                    keyPoints: [
                        "Degree is the highest exponent in the polynomial",
                        "Degree 1: line, Degree 2: parabola, Degree 3: cubic",
                        "Power function f(x) = x^n has different shapes for different n values",
                        "Leading coefficient (first term's number) affects direction and steepness"
                    ]
                },
                {
                    id: 5,
                    title: "Exponential Functions",
                    concept: "Rapidly growing or decaying quantities",
                    explanation: "Exponential functions have form f(x) = a·b^x where b > 0 and b ≠ 1. They grow or shrink rapidly. If b > 1, the function explodes upward (growth); if 0 < b < 1, it approaches zero (decay). Exponential functions model anything doubling, halving, or multiplying repeatedly.",
                    realWorldExample: "Bacteria growth: if a culture doubles every hour, population = 100 · 2^t (starting with 100). Radioactive decay: mass remaining = M₀ · (1/2)^t, halving every time period.",
                    keyPoints: [
                        "Form f(x) = a·b^x where a is initial value, b is the base",
                        "If b > 1: exponential growth",
                        "If 0 < b < 1: exponential decay",
                        "These grow/shrink much faster than polynomial functions"
                    ]
                },
                {
                    id: 6,
                    title: "Exponential Growth and Decay",
                    concept: "Modeling real-world change processes",
                    explanation: "Exponential growth means quantities increase at a rate proportional to their current size - the bigger it is, the faster it grows. Exponential decay works backwards - the larger quantity present, the faster it disappears. Both follow f(x) = P₀·e^(kt) (continuous) or f(x) = P₀·(1+r)^t (discrete), where r is growth rate and k is decay constant.",
                    realWorldExample: "COVID-19 spread was exponential: if R₀=2, each infected person infects 2 others. Money in savings account grows exponentially with compound interest. Carbon-14 dating uses exponential decay to find artifact ages.",
                    keyPoints: [
                        "Growth: population = initial · (1+rate)^time",
                        "Decay: remaining = initial · (1-rate)^time",
                        "Continuous growth/decay: f(t) = P₀·e^(kt)",
                        "Half-life measures decay rate (how long for half to remain)"
                    ]
                },
                {
                    id: 7,
                    title: "Logarithmic Function",
                    concept: "The inverse of exponential functions",
                    explanation: "Logarithm is the opposite of exponential: if b^x = y, then log_b(y) = x. Think of it as 'what exponent do I need?' So log₂(8) asks 'what power of 2 gives 8?' Answer: 3, because 2³ = 8. Natural log (ln) uses base e ≈ 2.718. Logarithms help solve exponential equations.",
                    realWorldExample: "Sound intensity: decibels = 10·log₁₀(I/I₀). pH of water: pH = -log₁₀[H⁺]. Earthquake magnitude (Richter scale) uses logarithms. Any time exponential relationships are measured, logs appear.",
                    keyPoints: [
                        "log_b(x) = y means b^y = x",
                        "Natural log: ln(x) = log_e(x)",
                        "Common log: log(x) = log₁₀(x)",
                        "Logarithms convert multiplication to addition: log(xy) = log(x) + log(y)"
                    ]
                },
                {
                    id: 8,
                    title: "Inverse Functions",
                    concept: "Undoing what a function does",
                    explanation: "If function f does something, its inverse f⁻¹ undoes it. For f(x) = 2x + 3, the inverse is f⁻¹(x) = (x-3)/2. If f turns 5 into 13, then f⁻¹ turns 13 back into 5. To find an inverse: swap x and y, then solve for y. A function has an inverse if each output comes from exactly one input (it's one-to-one).",
                    realWorldExample: "Temperature: C = (F-32)·5/9 converts Fahrenheit to Celsius. Its inverse converts Celsius back to Fahrenheit. Encryption uses inverse functions - encrypt with one function, decrypt with its inverse.",
                    keyPoints: [
                        "f(f⁻¹(x)) = x and f⁻¹(f(x)) = x",
                        "Not all functions have inverses (must be one-to-one)",
                        "Graph of f⁻¹ is graph of f reflected over line y=x",
                        "Exponential and logarithmic functions are inverses of each other"
                    ]
                },
                {
                    id: 9,
                    title: "Composite Functions",
                    concept: "Combining functions",
                    explanation: "Composite means putting functions together: if f and g are functions, the composite (f∘g)(x) means 'first apply g, then apply f to the result'. So (f∘g)(x) = f(g(x)). It's like an assembly line: g processes x, then f processes the output. Order matters - (f∘g) is usually different from (g∘f).",
                    realWorldExample: "Baking: first g(x) = mix ingredients, then f(x) = bake the mixture. Doing them in reverse order doesn't work! Financial: first apply inflation rate, then apply tax - these are composite functions.",
                    keyPoints: [
                        "(f∘g)(x) = f(g(x)) - apply g first, then f",
                        "Order matters: (f∘g) ≠ (g∘f) usually",
                        "Domain of composite must be in domain of g, and g's output must be in f's domain",
                        "Used to build complex functions from simpler ones"
                    ]
                },
                {
                    id: 10,
                    title: "Sine, Cosine and Tangent",
                    concept: "Trigonometric ratios in right triangles",
                    explanation: "In a right triangle, sin(angle) = opposite/hypotenuse, cos(angle) = adjacent/hypotenuse, tan(angle) = opposite/adjacent. Memory aid: SOH-CAH-TOA. These ratios let you find unknown sides if you know one angle and one side, or find angles if you know two sides. These functions repeat in waves and are crucial for periodic phenomena.",
                    realWorldExample: "Surveying: to find height of a building, measure distance and angle. Height = distance × tan(angle). Navigation uses sine and cosine for direction. AC electricity is a cosine wave.",
                    keyPoints: [
                        "sin(θ) = opposite/hypotenuse",
                        "cos(θ) = adjacent/hypotenuse",
                        "tan(θ) = opposite/adjacent",
                        "These repeat with period 360° (or 2π radians)"
                    ]
                },
                {
                    id: 11,
                    title: "Unit Circle and Trigonometry",
                    concept: "Understanding angles beyond right triangles",
                    explanation: "The unit circle is a circle of radius 1 centered at origin. Any point on it has coordinates (cos(θ), sin(θ)) for angle θ. This extends trig beyond right triangles - we can find sine and cosine for ANY angle, including negative and angles > 90°. The circle 'wraps around' - angles repeat every 360°.",
                    realWorldExample: "Circular motion: a spinning wheel, satellite orbit, or vibrating spring. The unit circle shows position at any time. Tides are approximately cos(t) or sin(t) functions that repeat periodically.",
                    keyPoints: [
                        "Unit circle has radius 1, center at origin",
                        "Point (cos(θ), sin(θ)) is at angle θ on unit circle",
                        "Angles wrap around: sin(θ) = sin(θ+360°)",
                        "Pythagorean identity: sin²(θ) + cos²(θ) = 1"
                    ]
                },
                {
                    id: 12,
                    title: "Inverse Circular Functions",
                    concept: "Finding angles from trigonometric values",
                    explanation: "If sin(θ) = 0.5, what is θ? Use the inverse: θ = sin⁻¹(0.5) = 30° (or π/6 radians). The inverse trig functions (sin⁻¹, cos⁻¹, tan⁻¹) undo trig functions. They take a ratio and return an angle. These are essential for solving trig equations and real-world problems like finding angles in navigation or surveying.",
                    realWorldExample: "Surveying: if the angle of elevation to a building top has sin(θ) = 2.5/50 = 0.05, find θ = sin⁻¹(0.05) ≈ 2.87°. Navigation: if you know your position change, use tan⁻¹ to find your heading.",
                    keyPoints: [
                        "sin⁻¹(x), cos⁻¹(x), tan⁻¹(x) give angles",
                        "sin⁻¹ returns angles in [-90°, 90°] or [-π/2, π/2]",
                        "cos⁻¹ returns angles in [0°, 180°] or [0, π]",
                        "These undo the trig functions: sin(sin⁻¹(x)) = x"
                    ]
                }
            ],
            quiz: {
                questions: [
                    {
                        id: 1,
                        text: "What is the key property of a function?",
                        type: "multiple-choice",
                        options: [
                            { text: "Each input has exactly one output", correct: true },
                            { text: "Each output has exactly one input", correct: false },
                            { text: "It must be a line or parabola", correct: false },
                            { text: "It must be increasing", correct: false }
                        ],
                        explanation: "The defining property of a function is that each input maps to exactly one output. Multiple inputs can give the same output, but one input cannot give multiple outputs."
                    },
                    {
                        id: 2,
                        text: "For the quadratic f(x) = ax² + bx + c, if a < 0, the parabola opens...",
                        type: "multiple-choice",
                        options: [
                            { text: "Downward (inverted U shape)", correct: true },
                            { text: "Upward (U shape)", correct: false },
                            { text: "To the left", correct: false },
                            { text: "To the right", correct: false }
                        ],
                        explanation: "When the coefficient a is negative, the parabola opens downward like an upside-down U, with a maximum point at the vertex."
                    },
                    {
                        id: 3,
                        text: "In exponential growth f(x) = a·b^x, what happens if b > 1?",
                        type: "multiple-choice",
                        options: [
                            { text: "The function grows rapidly as x increases", correct: true },
                            { text: "The function decreases", correct: false },
                            { text: "The function stays constant", correct: false },
                            { text: "The function equals zero", correct: false }
                        ],
                        explanation: "When b > 1, exponential functions grow extremely rapidly. This models bacteria growth, compound interest, or pandemic spread."
                    },
                    {
                        id: 4,
                        text: "What is the relationship between exponential and logarithmic functions?",
                        type: "multiple-choice",
                        options: [
                            { text: "They are inverse functions of each other", correct: true },
                            { text: "They are the same function", correct: false },
                            { text: "They are always equal", correct: false },
                            { text: "They have no relationship", correct: false }
                        ],
                        explanation: "Exponential and logarithmic functions are inverses: if b^x = y, then log_b(y) = x. They undo each other."
                    },
                    {
                        id: 5,
                        text: "For trigonometry, SOH-CAH-TOA means:",
                        type: "multiple-choice",
                        options: [
                            { text: "Sine=Opposite/Hyp, Cos=Adjacent/Hyp, Tan=Opposite/Adjacent", correct: true },
                            { text: "All sides are equal", correct: false },
                            { text: "The triangle is isosceles", correct: false },
                            { text: "Sin equals cosine", correct: false }
                        ],
                        explanation: "SOH-CAH-TOA is a memory device: Sin=Opposite/Hypotenuse, Cos=Adjacent/Hypotenuse, Tan=Opposite/Adjacent for right triangles."
                    },
                    {
                        id: 6,
                        text: "What is the period of sin(x) and cos(x)?",
                        type: "multiple-choice",
                        options: [
                            { text: "360° (or 2π radians)", correct: true },
                            { text: "180° (or π radians)", correct: false },
                            { text: "90° (or π/2 radians)", correct: false },
                            { text: "They don't repeat", correct: false }
                        ],
                        explanation: "Both sin(x) and cos(x) repeat every 360° (or 2π radians): sin(θ) = sin(θ + 360°)."
                    },
                    {
                        id: 7,
                        text: "To find a function's inverse, you should:",
                        type: "multiple-choice",
                        options: [
                            { text: "Swap x and y, then solve for y", correct: true },
                            { text: "Subtract from 1", correct: false },
                            { text: "Take the reciprocal", correct: false },
                            { text: "Square both sides", correct: false }
                        ],
                        explanation: "To find the inverse function, replace y with x and x with y in the original function, then solve for the new y."
                    },
                    {
                        id: 8,
                        text: "What does composite function notation (f∘g)(x) mean?",
                        type: "multiple-choice",
                        options: [
                            { text: "Apply g first, then apply f to the result: f(g(x))", correct: true },
                            { text: "Apply f first, then apply g", correct: false },
                            { text: "Multiply f and g together", correct: false },
                            { text: "Add the functions", correct: false }
                        ],
                        explanation: "(f∘g)(x) = f(g(x)), meaning apply g to x first, then apply f to that result."
                    },
                    {
                        id: 9,
                        text: "On the unit circle, what are the coordinates of an angle θ?",
                        type: "multiple-choice",
                        options: [
                            { text: "(cos(θ), sin(θ))", correct: true },
                            { text: "(sin(θ), cos(θ))", correct: false },
                            { text: "(tan(θ), 1)", correct: false },
                            { text: "(1, θ)", correct: false }
                        ],
                        explanation: "On the unit circle (radius 1), a point at angle θ has coordinates (cos(θ), sin(θ))."
                    },
                    {
                        id: 10,
                        text: "The discriminant b²-4ac in the quadratic formula determines...",
                        type: "multiple-choice",
                        options: [
                            { text: "The number of real solutions to the quadratic", correct: true },
                            { text: "The shape of the parabola", correct: false },
                            { text: "The y-intercept", correct: false },
                            { text: "The axis of symmetry", correct: false }
                        ],
                        explanation: "If discriminant > 0: two real solutions; = 0: one solution; < 0: no real solutions."
                    }
                ]
            }
        },
        {
            id: 3,
            title: "Limits and Introduction to Derivatives",
            description: "Foundations of calculus and instantaneous change",
            lessons: [
                {
                    id: 1,
                    title: "Displacement, Velocity and Acceleration",
                    concept: "Rates of change in motion",
                    explanation: "Displacement is position (x) at time t. Velocity is how fast position changes - it's the instantaneous rate of change of displacement. Acceleration is how fast velocity changes. These are the first applications showing why we need calculus: 'How fast is something moving right now?' requires more than simple division because we need an instantaneous rate, not an average.",
                    realWorldExample: "A car's dashboard speedometer shows instantaneous velocity. A missile launched from platform: x(t) = -5t² + 250t + 15. Its velocity v(t) and acceleration a(t) determine if it reaches target height at 25 seconds (maximum height: 3,140m).",
                    keyPoints: [
                        "Displacement = position as function of time",
                        "Velocity = instantaneous rate of change of displacement",
                        "Acceleration = instantaneous rate of change of velocity",
                        "These concepts lead to the derivative, which we'll learn soon"
                    ]
                },
                {
                    id: 2,
                    title: "Slopes and Average Rates of Change",
                    concept: "How quantities change",
                    explanation: "Slope measures steepness: slope = rise/run = (y₂-y₁)/(x₂-x₁). Average rate of change uses the same formula. If you travel 100 miles in 2 hours, average rate = 100/2 = 50 mph. This uses two points to calculate average change. But your instantaneous speed varied - you weren't always at 50 mph. To get instantaneous rates, we need the derivative.",
                    realWorldExample: "Stock price: if it's $100 Monday and $110 Friday, average change = $10/5days = $2/day. But the price changed fastest on Wednesday and hardly Tuesday. Derivatives give the instantaneous rate.",
                    keyPoints: [
                        "Average rate of change = (f(x₂)-f(x₁))/(x₂-x₁)",
                        "Slope of a line = rise/run",
                        "Slope = average rate of change between two points",
                        "We want to find instantaneous rate, not average"
                    ]
                },
                {
                    id: 3,
                    title: "Tangent Lines and Secants",
                    concept: "Lines on curves",
                    explanation: "A secant line crosses a curve at two points (like a chord). A tangent line touches the curve at exactly one point, following the curve's direction there. The slope of a tangent line is the instantaneous rate of change (derivative). To find it: get secant slope between point P and a nearby point Q, then bring Q closer and closer to P. The limiting slope is the tangent slope.",
                    realWorldExample: "Curved road: the tangent line at any point shows your direction of travel. The curve's 'steepness' at a point is the slope of its tangent line there.",
                    keyPoints: [
                        "Secant line connects two points on a curve",
                        "Tangent line touches curve at one point",
                        "Tangent slope = derivative = instantaneous rate of change",
                        "Found by taking limit of secant slopes as points get closer"
                    ]
                },
                {
                    id: 4,
                    title: "Limit Laws",
                    concept: "Rules for computing limits",
                    explanation: "Limits have arithmetic rules making them easier to calculate. If lim f(x) = L and lim g(x) = M, then: lim(f+g) = L+M, lim(f-g) = L-M, lim(f·g) = L·M, lim(f/g) = L/M (if M≠0). Also: lim(c·f) = c·L for constant c. These let you break complex limits into simpler pieces.",
                    realWorldExample: "Predicting a system's behavior: if you know how one part approaches a limit and another part approaches a limit, combine them using limit laws.",
                    keyPoints: [
                        "Limit of a sum = sum of limits",
                        "Limit of product = product of limits",
                        "Limit of quotient = quotient of limits (denominator ≠ 0)",
                        "Limit of constant times function = constant times limit"
                    ]
                },
                {
                    id: 5,
                    title: "Different Kinds of Limits",
                    concept: "Left, right, and removable limits",
                    explanation: "Right-hand limit: lim(x→a⁺) means x approaches a from the right. Left-hand limit: lim(x→a⁻) means from the left. For a limit to exist, left and right limits must be equal. Sometimes a function has a 'hole' at a point (like f(x)=(x²-1)/(x-1) at x=1), making it undefined there, but the left and right limits exist and are equal - this is a removable discontinuity.",
                    realWorldExample: "A function with a hole: imagine a graph with all points except one. The limit still exists at that point even though the function isn't defined there.",
                    keyPoints: [
                        "Right-hand limit: approaching from values > a",
                        "Left-hand limit: approaching from values < a",
                        "Limit exists if left-hand = right-hand limit",
                        "Removable discontinuity = hole that could be 'filled'"
                    ]
                },
                {
                    id: 6,
                    title: "Limits and Continuity",
                    concept: "Functions without breaks or jumps",
                    explanation: "A function is continuous at point a if: (1) f(a) is defined, (2) lim(x→a) f(x) exists, and (3) lim(x→a) f(x) = f(a). In plain English: no holes, jumps, or breaks. Continuous functions can be traced without lifting your pen. Most functions we use (polynomials, exponentials, trig functions) are continuous wherever they're defined.",
                    realWorldExample: "Height as you walk: continuous (no sudden jumps). Temperature in a room: mostly continuous. Stock price: discontinuous (jumps when market opens). Email downloads: discontinuous (size jumps from 0 to full).",
                    keyPoints: [
                        "Continuous means no breaks, holes, or jumps in graph",
                        "Three conditions must hold: function defined, limit exists, they equal",
                        "Polynomials are continuous everywhere",
                        "Rational functions are continuous except where denominator = 0"
                    ]
                },
                {
                    id: 7,
                    title: "Derivative as a Limit",
                    concept: "Formal definition of the derivative",
                    explanation: "The derivative of f at point a is: f'(a) = lim(h→0) [f(a+h) - f(a)]/h. This limit represents the slope of the tangent line - the instantaneous rate of change. As h approaches 0, we're looking at smaller and smaller secant slopes, approaching the tangent slope. This formula is the foundation of all derivative rules.",
                    realWorldExample: "Velocity is the derivative of position. If position x(t) = 5t², then v(0) = lim(h→0) [5(0+h)² - 0]/h = 5h·0 = 0 (starting from rest).",
                    keyPoints: [
                        "f'(a) = lim(h→0) [f(a+h) - f(a)]/h",
                        "This gives instantaneous rate of change at x = a",
                        "Geometrically, it's the slope of tangent line",
                        "This definition works for any function"
                    ]
                },
                {
                    id: 8,
                    title: "Finding Derivatives",
                    concept: "Computing derivatives from the definition",
                    explanation: "Using the limit definition to find derivatives: for f(x) = x², find f'(x) by computing lim(h→0) [(x+h)² - x²]/h = lim(h→0) [2xh + h²]/h = lim(h→0) [2x + h] = 2x. So d/dx(x²) = 2x. For f(x) = x³, you get f'(x) = 3x². Patterns emerge: d/dx(xⁿ) = n·x^(n-1).",
                    realWorldExample: "Computing acceleration from position: if position = t², velocity = d(t²)/dt = 2t. Acceleration = d(2t)/dt = 2 (constant acceleration).",
                    keyPoints: [
                        "Use limit definition: f'(x) = lim(h→0) [f(x+h) - f(x)]/h",
                        "Power rule emerges: d/dx(xⁿ) = n·x^(n-1)",
                        "Derivative of constant = 0",
                        "Derivative of x = 1"
                    ]
                },
                {
                    id: 9,
                    title: "Leibniz Notation",
                    concept: "Alternative derivative notation",
                    explanation: "Leibniz notation writes the derivative as dy/dx (read 'dee y dee x'), treating it like a fraction of infinitesimals. It clearly shows which variable you're differentiating with respect to. If y = f(x), then dy/dx = f'(x). This notation is handy for chain rule and related rates. It's not technically a fraction, but behaves like one algebraically.",
                    realWorldExample: "In physics, if s is distance and t is time, then ds/dt is velocity. da/dt is acceleration. This notation makes clear what the rate of change 'of' and 'with respect to' are.",
                    keyPoints: [
                        "dy/dx means derivative of y with respect to x",
                        "Not a fraction, but behaves algebraically like one",
                        "dy/dx = f'(x) when y = f(x)",
                        "Notation makes relationships clear in complex problems"
                    ]
                },
                {
                    id: 10,
                    title: "Differentials and Applications",
                    concept: "Using derivatives in real problems",
                    explanation: "A differential dy represents an infinitesimal change in y for a small change dx. Formally: dy = f'(x)dx. This connects derivatives to rates of change: if dr/dt = 2 (radius increasing at 2 units/time), then dV/dt = dV/dr · dr/dt gives how volume changes. This is the chain rule in differential form, essential for related rates problems.",
                    realWorldExample: "A balloon expands: radius increases at 0.5 cm/s. How fast is volume increasing? V = (4/3)πr³, so dV/dr = 4πr². At r=10cm, dV/dt = 4π(100)·(0.5) = 200π cm³/s.",
                    keyPoints: [
                        "Differential dy = f'(x)dx",
                        "dy/dx = f'(x) can be rearranged: dy = f'(x)dx",
                        "Used in related rates: dV/dt = (dV/dr)·(dr/dt)",
                        "Connects rates of different variables through the chain rule"
                    ]
                }
            ],
            quiz: {
                questions: [
                    {
                        id: 1,
                        text: "What is the relationship between displacement, velocity, and acceleration?",
                        type: "multiple-choice",
                        options: [
                            { text: "Velocity is the rate of change of displacement; acceleration is rate of change of velocity", correct: true },
                            { text: "They are all the same thing", correct: false },
                            { text: "Displacement is the rate of change of velocity", correct: false },
                            { text: "There is no relationship", correct: false }
                        ],
                        explanation: "Velocity measures how displacement changes over time. Acceleration measures how velocity changes over time. Each is the derivative of the previous."
                    },
                    {
                        id: 2,
                        text: "What is the slope of a secant line?",
                        type: "multiple-choice",
                        options: [
                            { text: "The average rate of change between two points on a curve", correct: true },
                            { text: "The instantaneous rate of change at one point", correct: false },
                            { text: "The slope of a vertical line", correct: false },
                            { text: "Always equal to zero", correct: false }
                        ],
                        explanation: "A secant line connects two points on a curve. Its slope is (f(x₂)-f(x₁))/(x₂-x₁), the average rate of change."
                    },
                    {
                        id: 3,
                        text: "How is a tangent line different from a secant line?",
                        type: "multiple-choice",
                        options: [
                            { text: "Tangent touches at one point; secant intersects at two points", correct: true },
                            { text: "Tangent is vertical; secant is horizontal", correct: false },
                            { text: "Tangent has negative slope; secant has positive", correct: false },
                            { text: "There is no difference", correct: false }
                        ],
                        explanation: "A tangent line touches a curve at exactly one point and gives the instantaneous rate of change. A secant line crosses at two points and gives average rate of change."
                    },
                    {
                        id: 4,
                        text: "If lim f(x) = 3 and lim g(x) = 2, what is lim[f(x) + g(x)]?",
                        type: "multiple-choice",
                        options: [
                            { text: "5", correct: true },
                            { text: "1", correct: false },
                            { text: "6", correct: false },
                            { text: "Undefined", correct: false }
                        ],
                        explanation: "By the limit law for sums: lim[f(x) + g(x)] = lim f(x) + lim g(x) = 3 + 2 = 5."
                    },
                    {
                        id: 5,
                        text: "What is a removable discontinuity?",
                        type: "multiple-choice",
                        options: [
                            { text: "A hole in the graph where the limit exists but the function is undefined", correct: true },
                            { text: "A vertical asymptote", correct: false },
                            { text: "A jump discontinuity", correct: false },
                            { text: "Where the function is continuous", correct: false }
                        ],
                        explanation: "A removable discontinuity occurs when a limit exists at a point but the function is undefined (a hole). It could be 'removed' by defining the function value to equal the limit."
                    },
                    {
                        id: 6,
                        text: "What three conditions must be true for a function to be continuous at point a?",
                        type: "multiple-choice",
                        options: [
                            { text: "f(a) defined, limit exists, and lim f(x) = f(a)", correct: true },
                            { text: "f(a) = 0, f is positive, and f is increasing", correct: false },
                            { text: "f has a tangent line and is differentiable", correct: false },
                            { text: "f is a polynomial", correct: false }
                        ],
                        explanation: "Continuity requires: (1) f(a) is defined, (2) lim(x→a) f(x) exists, and (3) the limit equals f(a)."
                    },
                    {
                        id: 7,
                        text: "What does the limit definition of the derivative measure?",
                        type: "multiple-choice",
                        options: [
                            { text: "The instantaneous rate of change at a point", correct: true },
                            { text: "The area under a curve", correct: false },
                            { text: "The zeros of a function", correct: false },
                            { text: "The period of oscillation", correct: false }
                        ],
                        explanation: "The derivative f'(a) = lim(h→0)[f(a+h)-f(a)]/h measures the instantaneous rate of change, which is the slope of the tangent line."
                    },
                    {
                        id: 8,
                        text: "Using the power rule, what is the derivative of f(x) = x³?",
                        type: "multiple-choice",
                        options: [
                            { text: "3x²", correct: true },
                            { text: "x²", correct: false },
                            { text: "3x", correct: false },
                            { text: "x⁴", correct: false }
                        ],
                        explanation: "The power rule states d/dx(xⁿ) = n·x^(n-1). For x³: d/dx(x³) = 3·x² = 3x²."
                    },
                    {
                        id: 9,
                        text: "What does the notation dy/dx represent?",
                        type: "multiple-choice",
                        options: [
                            { text: "The derivative of y with respect to x", correct: true },
                            { text: "y divided by x", correct: false },
                            { text: "The integral of y times x", correct: false },
                            { text: "A ratio of whole numbers", correct: false }
                        ],
                        explanation: "Leibniz notation dy/dx represents the derivative - the instantaneous rate of change of y with respect to x."
                    },
                    {
                        id: 10,
                        text: "In the related rates formula dV/dt = (dV/dr)·(dr/dt), what does each term represent?",
                        type: "multiple-choice",
                        options: [
                            { text: "Rate of change of V vs t, partial derivative dV/dr, and rate of change of r vs t", correct: true },
                            { text: "Three separate equations with no connection", correct: false },
                            { text: "Division of three quantities", correct: false },
                            { text: "Three volumes at different times", correct: false }
                        ],
                        explanation: "This is the chain rule in differential form: dV/dt is how volume changes with time, dV/dr is how volume depends on radius, dr/dt is how radius changes with time."
                    }
                ]
            }
        },
        {
            id: 4,
            title: "Differentiation Rules and Applications",
            description: "Computing derivatives efficiently and solving optimization problems",
            lessons: [
                {
                    id: 1,
                    title: "Increasing and Decreasing Functions",
                    concept: "Using derivatives to determine function behavior",
                    explanation: "A function is increasing where its derivative is positive (graph goes up), and decreasing where the derivative is negative (graph goes down). The derivative tells you the function's 'direction'. Find critical points where f'(x) = 0 or undefined, test the sign of f' in each interval, and you know where the function increases or decreases.",
                    realWorldExample: "Profit over time: when derivative > 0, profit is increasing (business improving). When derivative < 0, profit decreasing (business declining). Critical point might be a maximum profit or minimum loss.",
                    keyPoints: [
                        "If f'(x) > 0, function f is increasing on that interval",
                        "If f'(x) < 0, function f is decreasing on that interval",
                        "If f'(x) = 0, possible local maximum or minimum",
                        "Use sign analysis of f' to determine intervals"
                    ]
                },
                {
                    id: 2,
                    title: "Product Rule",
                    concept: "Differentiating products of functions",
                    explanation: "To differentiate u·v, use (u·v)' = u'·v + u·v'. You differentiate the first function (u'), keep the second (v), then add the first (u), kept, times the derivative of the second (v'). Memory: 'first prime times second, plus first times second prime'. Example: d/dx(x²·sin(x)) = 2x·sin(x) + x²·cos(x).",
                    realWorldExample: "Revenue = price × quantity. dRevenue/dt = (dprice/dt)·quantity + price·(dquantity/dt). If price increases but quantity drops, which effect dominates?",
                    keyPoints: [
                        "Product rule: (u·v)' = u'·v + u·v'",
                        "Don't differentiate and multiply separately",
                        "Apply this when function is a product of two functions",
                        "Extends to three or more products"
                    ]
                },
                {
                    id: 3,
                    title: "Applications of the Product Rule",
                    concept: "Using product rule in real problems",
                    explanation: "Apply product rule when quantities multiply: force×distance (work), concentration×volume (amount), price×quantity (revenue). The rate of change depends on how both factors change. If distance increases but force decreases, work might increase, decrease, or stay constant depending on relative rates.",
                    realWorldExample: "Drug concentration in bloodstream = initial amount × exp(-kt) (decaying). Amount = concentration × blood volume. As concentration drops, volume might stay constant or change - product rule tracks total amount.",
                    keyPoints: [
                        "Useful for rate of change of products",
                        "Common in economics (revenue, profit) and physics (work, power)",
                        "Must apply rule correctly; not (u·v)' = u'·v'",
                        "Leads to understanding how multiple factors affect outcome"
                    ]
                },
                {
                    id: 4,
                    title: "Quotient Rule",
                    concept: "Differentiating quotients of functions",
                    explanation: "To differentiate u/v, use (u/v)' = (u'·v - u·v')/v². Memory: 'low times high minus high times low, all over low squared'. This is trickier than the product rule - order matters! Example: d/dx(sin(x)/x) = (cos(x)·x - sin(x)·1)/x² = (x·cos(x) - sin(x))/x².",
                    realWorldExample: "Efficiency = output/input. dEfficiency/time = (d(output)/dt·input - output·d(input)/dt) / input². If output increases and input stays fixed, efficiency increases.",
                    keyPoints: [
                        "Quotient rule: (u/v)' = (u'·v - u·v')/v²",
                        "Order matters in numerator subtraction",
                        "Don't forget to square the denominator",
                        "Test common values to avoid sign errors"
                    ]
                },
                {
                    id: 5,
                    title: "Applications of the Quotient Rule",
                    concept: "Rate of change of ratios",
                    explanation: "Quotient rule applies when one quantity divides another: efficiency (output/input), concentration (amount/volume), average (total/number). The rate of change depends on both numerator and denominator rates. Even if numerator increases, ratio might decrease if denominator increases faster.",
                    realWorldExample: "Test score average: if you score 95 (high) but 5 tests taken, average = 95/5 = 19. Now score 90 on 6th test: average = (95+90)/6 = 30.8. Adding lower score raised average because denominator effect dominated.",
                    keyPoints: [
                        "Quotient rule tracks how ratio changes when both parts change",
                        "Critical in economics, chemistry, and performance metrics",
                        "Numerator and denominator effects can oppose each other",
                        "Sign of quotient derivative reveals if ratio increasing or decreasing"
                    ]
                },
                {
                    id: 6,
                    title: "Chain Rule",
                    concept: "Differentiating composite functions",
                    explanation: "For composite function f(g(x)), use (f∘g)'(x) = f'(g(x))·g'(x). Differentiate the outside function, evaluated at the inside, then multiply by the derivative of the inside. Example: d/dx(sin(x²)) = cos(x²)·2x (outside derivative times inside derivative). This is perhaps the most important rule - many functions are composites.",
                    realWorldExample: "Temperature in a city as you travel: temp depends on latitude, and latitude depends on time. dTemp/dtime = (dTemp/dlatitude)·(dlatitude/dtime) - a chain of rates.",
                    keyPoints: [
                        "Chain rule: d/dx[f(g(x))] = f'(g(x))·g'(x)",
                        "Differentiate outside, keep inside unchanged, multiply by inside derivative",
                        "Most important rule - used constantly",
                        "Recognize composite functions: e.g., sin(x²), (x³+1)⁵, e^(2x)"
                    ]
                },
                {
                    id: 7,
                    title: "Applications of the Chain Rule",
                    concept: "Complex rate-of-change problems",
                    explanation: "Chain rule solves problems where one rate drives another. Related rates, optimization of composite functions, and phenomena with hidden dependencies all use the chain rule. Example: water flows into a cone - how fast does height increase? Height and volume are related (V = (1/3)πr²h with r proportional to h), so dh/dt depends on dV/dt through the chain rule.",
                    realWorldExample: "Cone filling with water: V = (1/3)πr²h. If water flows in at 10 cm³/s, how fast does height rise? Use chain rule: dh/dt = (dh/dV)·(dV/dt) = 1/(πr²) · 10.",
                    keyPoints: [
                        "Chain rule connects different rates of change",
                        "Common in related rates problems",
                        "Usually need to identify which function composes with which",
                        "Crucial for optimization of complex functions"
                    ]
                },
                {
                    id: 8,
                    title: "Sign Diagrams",
                    concept: "Tracking function behavior with derivatives",
                    explanation: "Create a sign diagram by: (1) finding critical points where f'(x) = 0 or undefined, (2) marking them on a line, (3) testing the sign of f' in each interval. This shows exactly where f increases (f' > 0) and decreases (f' < 0). Combine with second derivative to distinguish maxima from minima.",
                    realWorldExample: "Profit function: find critical points, test sign of derivative in each interval, identify where profit increases (invest in that strategy) and where it decreases (cut losses).",
                    keyPoints: [
                        "Sign diagram of f' shows where f increases/decreases",
                        "Critical points divide the domain into intervals",
                        "Test one point in each interval",
                        "Essential for optimization problems"
                    ]
                },
                {
                    id: 9,
                    title: "Maxima and Minima",
                    concept: "Finding extreme values of functions",
                    explanation: "Local maximum: f(c) ≥ f(x) for x near c. Local minimum: f(c) ≤ f(x) for x near c. Find them by setting f'(x) = 0 (critical points) and checking the second derivative test or sign change. At maxima, f' changes from positive to negative. At minima, f' changes from negative to positive.",
                    realWorldExample: "Business optimization: find price that maximizes profit. Revenue = price × quantity, profit = revenue - cost. Set dProfit/dprice = 0, solve for price, verify it's a maximum (second derivative < 0).",
                    keyPoints: [
                        "Local max where f' changes from + to - (peak)",
                        "Local min where f' changes from - to + (valley)",
                        "Global max/min: largest/smallest values on entire domain",
                        "Check critical points and endpoints of domain"
                    ]
                },
                {
                    id: 10,
                    title: "The Second Derivative Test",
                    concept: "Using concavity to classify critical points",
                    explanation: "The second derivative f''(x) measures concavity (curve curvature). If f''(x) > 0, curve is concave up (∪ shape). If f''(x) < 0, concave down (∩ shape). At critical point c: if f''(c) > 0, it's a local minimum; if f''(c) < 0, local maximum; if f''(c) = 0, test is inconclusive. Second derivative test is faster than sign analysis of f'.",
                    realWorldExample: "Cost function: C(x) = x²/10 - 5x + 100. C'(x) = x/5 - 5 = 0 at x=25. C''(x) = 1/5 > 0, so x=25 is a minimum cost point.",
                    keyPoints: [
                        "f''(x) > 0: concave up, local minimum if f'(c)=0",
                        "f''(x) < 0: concave down, local maximum if f'(c)=0",
                        "Second derivative test faster than sign analysis",
                        "f''(x) = 0 means inflection point (concavity changes)"
                    ]
                },
                {
                    id: 11,
                    title: "Concavity and Inflections",
                    concept: "Understanding curve shape",
                    explanation: "Concavity describes how a curve bends. Concave up (∪): curve opens upward, like a smile. Concave down (∩): opens downward, like a frown. An inflection point is where concavity changes - where f''(x) = 0 and f'' changes sign. These points are visually where the curve transitions from bending one way to bending another way.",
                    realWorldExample: "Growth rate of a population: first increases (concave up - accelerating growth), then decreases (concave down - slowing growth). Inflection point where growth rate peaks.",
                    keyPoints: [
                        "Concave up: f''(x) > 0",
                        "Concave down: f''(x) < 0",
                        "Inflection point: f''(x) = 0 with sign change",
                        "Second derivative reveals curve's geometry"
                    ]
                },
                {
                    id: 12,
                    title: "Curve Sketching",
                    concept: "Combining derivatives to graph functions",
                    explanation: "To sketch a curve: (1) find domain, (2) identify critical points and where f' = 0, (3) find where f'' = 0 (inflections), (4) create sign diagrams for f' and f'', (5) find y-intercept and asymptotes, (6) plot key points and sketch using information from derivatives. Derivatives tell you everything about the shape.",
                    realWorldExample: "Sketch profit function: find critical points (max/min profit), inflection points (where growth rate changes), determine concavity. This complete picture shows optimal strategies.",
                    keyPoints: [
                        "First derivative shows increasing/decreasing and extrema",
                        "Second derivative shows concavity and inflections",
                        "Combine all information systematically",
                        "Derivatives completely determine curve shape"
                    ]
                },
                {
                    id: 13,
                    title: "Optimisation",
                    concept: "Finding best solutions using calculus",
                    explanation: "Optimization means finding maximum or minimum values. Real problems: maximize profit, minimize cost, optimize design. Method: (1) write quantity to optimize as function of relevant variables, (2) reduce to one variable if possible, (3) set derivative to 0, (4) solve for critical points, (5) verify it's maximum or minimum (not inflection), (6) compare critical points with boundary values.",
                    realWorldExample: "Maximize rectangular area with perimeter 100m: A(x) = x(50-x). dA/dx = 50-2x = 0 gives x=25, so dimensions are 25×25 (square), area = 625 m². This is maximum because d²A/dx² = -2 < 0.",
                    keyPoints: [
                        "Set up function with quantity to optimize",
                        "Find critical points where derivative = 0",
                        "Use second derivative test or compare values",
                        "Consider domain restrictions and endpoints"
                    ]
                }
            ],
            quiz: {
                questions: [
                    {
                        id: 1,
                        text: "When is a function increasing?",
                        type: "multiple-choice",
                        options: [
                            { text: "When f'(x) > 0", correct: true },
                            { text: "When f'(x) < 0", correct: false },
                            { text: "When f'(x) = 0", correct: false },
                            { text: "When f(x) > 0", correct: false }
                        ],
                        explanation: "A function is increasing on intervals where its derivative is positive."
                    },
                    {
                        id: 2,
                        text: "What is the product rule formula?",
                        type: "multiple-choice",
                        options: [
                            { text: "(u·v)' = u'·v + u·v'", correct: true },
                            { text: "(u·v)' = u'·v'", correct: false },
                            { text: "(u·v)' = u'·v - u·v'", correct: false },
                            { text: "(u·v)' = (u·v)'", correct: false }
                        ],
                        explanation: "The product rule: (u·v)' = u'·v + u·v' (first derivative times second, plus first times second derivative)."
                    },
                    {
                        id: 3,
                        text: "What is the quotient rule formula?",
                        type: "multiple-choice",
                        options: [
                            { text: "(u/v)' = (u'·v - u·v')/v²", correct: true },
                            { text: "(u/v)' = u'/v'", correct: false },
                            { text: "(u/v)' = (u'·v + u·v')/v²", correct: false },
                            { text: "(u/v)' = u'/v", correct: false }
                        ],
                        explanation: "Quotient rule: (u/v)' = (u'·v - u·v')/v² (low times high minus high times low, all over low squared)."
                    },
                    {
                        id: 4,
                        text: "What is the chain rule formula?",
                        type: "multiple-choice",
                        options: [
                            { text: "d/dx[f(g(x))] = f'(g(x))·g'(x)", correct: true },
                            { text: "d/dx[f(g(x))] = f'(x)·g'(x)", correct: false },
                            { text: "d/dx[f(g(x))] = f(g'(x))", correct: false },
                            { text: "d/dx[f(g(x))] = f'(g(x)) + g'(x)", correct: false }
                        ],
                        explanation: "Chain rule: differentiate the outside function at the inside, times the derivative of the inside."
                    },
                    {
                        id: 5,
                        text: "What characterizes a local maximum?",
                        type: "multiple-choice",
                        options: [
                            { text: "f'(x) changes from positive to negative at that point", correct: true },
                            { text: "f'(x) changes from negative to positive", correct: false },
                            { text: "f''(x) > 0", correct: false },
                            { text: "f(x) = 0", correct: false }
                        ],
                        explanation: "At a local maximum, the first derivative changes from positive (increasing) to negative (decreasing)."
                    },
                    {
                        id: 6,
                        text: "If f''(x) > 0, the function is...",
                        type: "multiple-choice",
                        options: [
                            { text: "Concave up (∪ shape)", correct: true },
                            { text: "Concave down (∩ shape)", correct: false },
                            { text: "Increasing", correct: false },
                            { text: "Decreasing", correct: false }
                        ],
                        explanation: "When f''(x) > 0, the function is concave up, curving upward like a U or smile."
                    },
                    {
                        id: 7,
                        text: "What is an inflection point?",
                        type: "multiple-choice",
                        options: [
                            { text: "Where f''(x) = 0 and concavity changes", correct: true },
                            { text: "Where f'(x) = 0", correct: false },
                            { text: "Where f(x) = 0", correct: false },
                            { text: "Where the function has maximum value", correct: false }
                        ],
                        explanation: "An inflection point is where the second derivative equals zero and the concavity changes from up to down or vice versa."
                    },
                    {
                        id: 8,
                        text: "Using the second derivative test, if f'(c) = 0 and f''(c) > 0, then c is a...",
                        type: "multiple-choice",
                        options: [
                            { text: "Local minimum", correct: true },
                            { text: "Local maximum", correct: false },
                            { text: "Inflection point", correct: false },
                            { text: "Asymptote", correct: false }
                        ],
                        explanation: "By the second derivative test: f''(c) > 0 means concave up at c, so c is a local minimum."
                    },
                    {
                        id: 9,
                        text: "The critical points of a function are found where...",
                        type: "multiple-choice",
                        options: [
                            { text: "f'(x) = 0 or f' is undefined", correct: true },
                            { text: "f(x) = 0", correct: false },
                            { text: "f''(x) = 0", correct: false },
                            { text: "The function is continuous", correct: false }
                        ],
                        explanation: "Critical points occur where the first derivative equals zero or is undefined. These are candidates for local extrema."
                    },
                    {
                        id: 10,
                        text: "In optimization, what is the typical first step?",
                        type: "multiple-choice",
                        options: [
                            { text: "Write the quantity to optimize as a function of relevant variables", correct: true },
                            { text: "Immediately set the derivative to zero", correct: false },
                            { text: "Graph the function", correct: false },
                            { text: "Guess the answer", correct: false }
                        ],
                        explanation: "The first step in optimization is to set up a function representing what you want to maximize or minimize."
                    }
                ]
            }
        },
        {
            id: 5,
            title: "Integration",
            description: "Accumulation and area under curves",
            lessons: [
                {
                    id: 1,
                    title: "Inferring Displacement from Velocity",
                    concept: "Recovering position from rate of change",
                    explanation: "If you know velocity (how fast something moves), you can find total displacement (position change) by accumulating velocity over time. Displacement = area under the velocity curve. Mathematically, this is integration: if v(t) = dx/dt, then x = ∫v(t)dt (integral symbol ∫ means 'accumulate'). This is the opposite of differentiation - if derivatives measure rate of change, integrals measure accumulation.",
                    realWorldExample: "From speedometer readings, find total distance traveled. If speed is 60 mph for 2 hours, then 40 mph for 1 hour, total distance = 60(2) + 40(1) = 160 miles. With varying speed, use integration.",
                    keyPoints: [
                        "Integration is the reverse of differentiation",
                        "Integral accumulates area under a curve",
                        "∫v(t)dt gives displacement",
                        "Displacement = area between curve and time axis"
                    ]
                },
                {
                    id: 2,
                    title: "Riemann Sums and Definite Integrals",
                    concept: "Approximating and computing areas",
                    explanation: "To find area under a curve y = f(x) from x=a to x=b, divide interval into n rectangles. Each rectangle has height f(x) at some point and width Δx = (b-a)/n. Add up all rectangle areas - this is a Riemann sum. As n → ∞, rectangles get thinner, sum approaches true area. This limit is the definite integral: ∫ₐᵇ f(x)dx. Riemann sums show why integration gives area.",
                    realWorldExample: "Estimating fuel used: divide trip into time intervals, estimate fuel consumption rate in each interval, sum to get total. As intervals get smaller, estimate gets better.",
                    keyPoints: [
                        "Riemann sum approximates area with rectangles",
                        "As rectangles get thinner, approximation improves",
                        "Definite integral is the limit: ∫ₐᵇ f(x)dx",
                        "Result is area under curve from a to b"
                    ]
                },
                {
                    id: 3,
                    title: "Fundamental Theorem of Calculus and Indefinite Integrals",
                    concept: "Connection between derivatives and integrals",
                    explanation: "The Fundamental Theorem has two parts: (1) if F'(x) = f(x), then ∫ₐᵇ f(x)dx = F(b) - F(a) (definite integral uses antiderivative), (2) d/dx[∫ₐˣ f(t)dt] = f(x) (derivative undoes integral). An indefinite integral ∫f(x)dx is an antiderivative - a function whose derivative is f(x), written F(x) + C (C is any constant). This is the most important theorem in calculus.",
                    realWorldExample: "Position from velocity: if v(t) = 3t², then x(t) = ∫3t²dt = t³ + C. Position at t=0 is C. Position at t=5 is 125 + C.",
                    keyPoints: [
                        "Indefinite integral ∫f(x)dx is antiderivative",
                        "Definite integral ∫ₐᵇ f(x)dx = F(b) - F(a)",
                        "Include constant C in indefinite integrals",
                        "Differentiation and integration undo each other"
                    ]
                },
                {
                    id: 4,
                    title: "Connections Between Areas and Derivatives",
                    concept: "Relating accumulation to rates",
                    explanation: "If A(x) = area under curve from a fixed point to x, then A'(x) = f(x). The rate at which area accumulates equals the function's height. Conversely, ∫ₐᵇ f(x)dx gives total accumulated area. This deep connection shows integration is accumulation and differentiation is rate of change - they're inverses measuring opposite phenomena.",
                    realWorldExample: "Total profit accumulates as you sell items. Rate of accumulation (derivative of total profit) is marginal profit (profit per item sold).",
                    keyPoints: [
                        "d/dx[∫ₐˣ f(t)dt] = f(x)",
                        "Derivative of accumulated area equals height",
                        "Derivative measures rate; integral measures accumulation",
                        "They are inverse operations"
                    ]
                },
                {
                    id: 5,
                    title: "Areas Bounded by Curves",
                    concept: "Finding regions enclosed by multiple curves",
                    explanation: "When two curves y = f(x) and y = g(x) intersect, the area between them from x=a to x=b is ∫ₐᵇ |f(x) - g(x)|dx (absolute value ensures positive area). Find intersection points (where f = g), determine which curve is above, integrate the difference. Example: area between y = x² and y = x from x=0 to x=1 is ∫₀¹(x - x²)dx (x is above x² here).",
                    realWorldExample: "Consumer surplus: area between price and demand curve. Producer surplus: area between supply curve and price. Markets use these integrals to measure economic benefit.",
                    keyPoints: [
                        "Area between curves = ∫ₐᵇ (top - bottom) dx",
                        "Find intersection points first",
                        "Determine which curve is above",
                        "Can integrate left/right (x-axis) or up/down (y-axis)"
                    ]
                },
                {
                    id: 6,
                    title: "Integration by Substitution",
                    concept: "Changing variables to simplify integrals",
                    explanation: "For complex integrals, substitute u = g(x), du = g'(x)dx to transform into simpler form. Example: ∫2x(x²+1)⁵dx - let u = x²+1, du = 2xdx, becomes ∫u⁵du = u⁶/6 + C = (x²+1)⁶/6 + C. This is like undoing the chain rule. Choose substitution to simplify the integrand.",
                    realWorldExample: "In physics, energy integrals often need substitution. Force × distance = energy, but force and distance might not be simply related.",
                    keyPoints: [
                        "Substitution u = g(x) changes dx to du",
                        "Transform integral into simpler form",
                        "Integrate in terms of u",
                        "Substitute back to get answer in terms of x"
                    ]
                },
                {
                    id: 7,
                    title: "Odd and Even Functions",
                    concept: "Symmetry properties simplifying integrals",
                    explanation: "Even function: f(-x) = f(x) (symmetric about y-axis), like x² or cos(x). Odd function: f(-x) = -f(x) (symmetric about origin), like x³ or sin(x). For integration: ∫₋ₐᵃ even function dx = 2∫₀ᵃ even function dx (use symmetry). ∫₋ₐᵃ odd function dx = 0 (positive and negative parts cancel). These properties dramatically simplify calculations.",
                    realWorldExample: "Vibrations: cos(t) is even, so its integral over symmetric time interval around zero uses symmetry. Alternating current (AC) power: integrating sin(t) over full cycle gives zero (positive and negative halves cancel).",
                    keyPoints: [
                        "Even: f(-x) = f(x), graph symmetric about y-axis",
                        "Odd: f(-x) = -f(x), graph symmetric about origin",
                        "Integral of odd function over symmetric interval = 0",
                        "Integral of even function doubles from 0 to a"
                    ]
                },
                {
                    id: 8,
                    title: "Logistic Function",
                    concept: "Modeling growth with natural limits",
                    explanation: "Logistic growth models situations with maximum capacity: population in limited environment, disease spread, learning curves. Form: P(t) = K / (1 + Ae^(-rt)) where K is carrying capacity. Unlike exponential growth (unlimited), logistic growth saturates - rises fast then slows approaching limit K. The integral of logistic function models cumulative growth with natural bounds.",
                    realWorldExample: "COVID spread in a city: initially exponential, but as people get immunity or stay home, growth slows. Logistic function models this S-curve. Maximum infections = carrying capacity K.",
                    keyPoints: [
                        "Logistic growth has carrying capacity K",
                        "Starts slow, accelerates, then decelerates",
                        "Symmetric inflection point at K/2",
                        "More realistic than unlimited exponential growth"
                    ]
                },
                {
                    id: 9,
                    title: "Escape Velocity of a Rocket",
                    concept: "Application of integration to physics",
                    explanation: "Escape velocity is minimum speed to leave Earth's gravitational pull forever. Using energy conservation (kinetic + potential), integration shows v_escape = √(2GM/R) where G is gravity constant, M is Earth's mass, R is radius. To solve this, integrate the work done against gravity across distance - a classic integration application.",
                    realWorldExample: "Rockets need 11.2 km/s to escape Earth but only 2.4 km/s to escape the Moon (smaller, less massive). NASA uses these integrals to calculate fuel for space missions.",
                    keyPoints: [
                        "Escape velocity calculated using energy integral",
                        "Work against gravity requires integration",
                        "Depends on celestial body's mass and size",
                        "Real rockets account for air resistance (additional integration)"
                    ]
                },
                {
                    id: 10,
                    title: "Formula Sheet (Reference)",
                    concept: "Essential integration formulas",
                    explanation: "Key integration formulas: ∫xⁿdx = xⁿ⁺¹/(n+1) + C, ∫eˣdx = eˣ + C, ∫1/x dx = ln|x| + C, ∫cos(x)dx = sin(x) + C, ∫sin(x)dx = -cos(x) + C, ∫aˣdx = aˣ/ln(a) + C. Use substitution and integration by parts for complex integrals. Remember: always add +C to indefinite integrals.",
                    realWorldExample: "Physics problems use these formulas constantly. Engineering designs rely on integration. Economics uses integrals for cumulative quantities.",
                    keyPoints: [
                        "Memorize basic antiderivatives",
                        "Use substitution for composed functions",
                        "Integration by parts for products",
                        "Don't forget +C in indefinite integrals"
                    ]
                }
            ],
            quiz: {
                questions: [
                    {
                        id: 1,
                        text: "How does displacement relate to velocity through integration?",
                        type: "multiple-choice",
                        options: [
                            { text: "Displacement = ∫velocity dt (area under velocity curve)", correct: true },
                            { text: "Displacement = d(velocity)/dt", correct: false },
                            { text: "They are unrelated", correct: false },
                            { text: "Velocity = ∫displacement dt", correct: false }
                        ],
                        explanation: "Integration of velocity over time gives displacement. It measures the accumulated distance traveled."
                    },
                    {
                        id: 2,
                        text: "What does a Riemann sum do?",
                        type: "multiple-choice",
                        options: [
                            { text: "Approximates area under a curve using rectangles", correct: true },
                            { text: "Computes the exact derivative", correct: false },
                            { text: "Finds the asymptote of a function", correct: false },
                            { text: "Solves differential equations", correct: false }
                        ],
                        explanation: "A Riemann sum divides a region into rectangles and sums their areas to approximate the total area under a curve."
                    },
                    {
                        id: 3,
                        text: "What is the Fundamental Theorem of Calculus?",
                        type: "multiple-choice",
                        options: [
                            { text: "If F'(x) = f(x), then ∫ₐᵇ f(x)dx = F(b) - F(a)", correct: true },
                            { text: "Derivatives and integrals are unrelated", correct: false },
                            { text: "All functions are integrable", correct: false },
                            { text: "Integrals measure rate of change", correct: false }
                        ],
                        explanation: "The Fundamental Theorem connects derivatives and integrals: the definite integral equals the difference of antiderivative values at the endpoints."
                    },
                    {
                        id: 4,
                        text: "What is the difference between definite and indefinite integrals?",
                        type: "multiple-choice",
                        options: [
                            { text: "Indefinite has no limits (+ C), definite has limits and gives a number", correct: true },
                            { text: "They are the same", correct: false },
                            { text: "Definite is always zero", correct: false },
                            { text: "Indefinite always equals the derivative", correct: false }
                        ],
                        explanation: "Indefinite integrals ∫f(x)dx include +C and are families of antiderivatives. Definite integrals ∫ₐᵇ f(x)dx have limits and produce a single number (area)."
                    },
                    {
                        id: 5,
                        text: "To find the area between two curves y=f(x) and y=g(x), you compute:",
                        type: "multiple-choice",
                        options: [
                            { text: "∫ₐᵇ |f(x) - g(x)| dx", correct: true },
                            { text: "∫ₐᵇ f(x) dx + ∫ₐᵇ g(x) dx", correct: false },
                            { text: "∫ₐᵇ f(x) g(x) dx", correct: false },
                            { text: "f(b) - g(a)", correct: false }
                        ],
                        explanation: "The area between curves is the integral of the absolute difference (top curve minus bottom curve) over the interval."
                    },
                    {
                        id: 6,
                        text: "In substitution, if u = g(x), then du =",
                        type: "multiple-choice",
                        options: [
                            { text: "g'(x) dx", correct: true },
                            { text: "g(x) dx", correct: false },
                            { text: "g''(x) dx", correct: false },
                            { text: "dx / g(x)", correct: false }
                        ],
                        explanation: "In u-substitution, du = g'(x) dx (the derivative of u with respect to x, times dx)."
                    },
                    {
                        id: 7,
                        text: "Which property is true for even functions f(-x) = f(x)?",
                        type: "multiple-choice",
                        options: [
                            { text: "∫₋ₐᵃ f(x) dx = 2∫₀ᵃ f(x) dx", correct: true },
                            { text: "∫₋ₐᵃ f(x) dx = 0", correct: false },
                            { text: "f(x) is always positive", correct: false },
                            { text: "f'(x) is also even", correct: false }
                        ],
                        explanation: "For even functions, the integral over a symmetric interval can be simplified using symmetry about the y-axis."
                    },
                    {
                        id: 8,
                        text: "For odd functions f(-x) = -f(x), what is ∫₋ₐᵃ f(x) dx?",
                        type: "multiple-choice",
                        options: [
                            { text: "0 (positive and negative halves cancel)", correct: true },
                            { text: "2∫₀ᵃ f(x) dx", correct: false },
                            { text: "f(a) - f(-a)", correct: false },
                            { text: "Undefined", correct: false }
                        ],
                        explanation: "For odd functions over symmetric intervals, the negative area exactly cancels the positive area, giving zero."
                    },
                    {
                        id: 9,
                        text: "The logistic function models growth with...",
                        type: "multiple-choice",
                        options: [
                            { text: "A carrying capacity (natural limit)", correct: true },
                            { text: "Unlimited exponential growth", correct: false },
                            { text: "Constant acceleration", correct: false },
                            { text: "Zero final value", correct: false }
                        ],
                        explanation: "The logistic function P(t) = K/(1+Ae^(-rt)) models realistic growth that starts fast but approaches a maximum capacity K."
                    },
                    {
                        id: 10,
                        text: "What is escape velocity primarily determined by?",
                        type: "multiple-choice",
                        options: [
                            { text: "The celestial body's mass and radius", correct: true },
                            { text: "Air resistance only", correct: false },
                            { text: "Time of day", correct: false },
                            { text: "The rocket's color", correct: false }
                        ],
                        explanation: "Escape velocity v_escape = √(2GM/R) depends on the body's mass M, radius R, and gravity constant G. Larger/more massive bodies need higher escape velocities."
                    }
                ]
            }
        }
    ]
};

// Export for use in app.js
if (typeof module !== 'undefined' && module.exports) {
    module.exports = calculusContent;
}
