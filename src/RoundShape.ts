export default class RoundShape {
	public readonly radius: number;

	readonly radiusSquared: number;

	readonly circumference: number;

	readonly volume: number;

	readonly surfaceArea: number;

	static readonly PI = Math.PI;

	constructor(radius: number) {
		this.radius = radius;
		this.radiusSquared = radius * radius;
		this.circumference = 2 * RoundShape.PI * radius;
		this.volume = (4 / 3) * RoundShape.PI * this.radiusSquared * radius;
		this.surfaceArea = 4 * RoundShape.PI * this.radiusSquared;
	}

	calculateArea(): number {
		return this.radiusSquared;
	}

	calculateCircumference(): number {
		return this.circumference;
	}

	calculateVolume(): number {
		return this.volume;
	}

	calculateSurfaceArea(): number {
		return this.surfaceArea;
	}
}
