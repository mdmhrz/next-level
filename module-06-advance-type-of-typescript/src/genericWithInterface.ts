//Interface with generic

interface Developer<T, X = null> {
    name: string;
    salary: number;
    device: { brand: string; model: string, release: string };
    smartWatch: T;
    bike?: X
}

interface NonBrandWatch { heartRate: string; stopWatch: boolean }
interface BrandWatch { heartRate: string; stopWatch: boolean; callSupport: boolean; aiFeature: true }




const poorDeveloper: Developer<NonBrandWatch, { brand: string; capacity: string }> = {
    name: "mr. poor",
    salary: 20,
    device: {
        brand: "lenovo",
        model: "X1 Yoga",
        release: "2010"
    },
    smartWatch: { heartRate: "100", stopWatch: false },
    bike: {
        brand: "Honda",
        capacity: "150cc"
    }
}

const RichDeveloper: Developer<BrandWatch> = {
    name: "mr. poor",
    salary: 2000,
    device: {
        brand: "HP",
        model: "X1 Yoga",
        release: "2025"
    },
    smartWatch: { heartRate: "100", stopWatch: false, callSupport: true, aiFeature: true }
}