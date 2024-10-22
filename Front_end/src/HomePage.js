import React, { useState, useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./components/Card";
import { Button } from "./components/Button";
import { Input } from "./components/Input";
import { Activity, Droplet, Apple, Camera, Upload } from "lucide-react";

// Placeholder for chart component
const HealthTrendChart = () => (
  <div className="w-full h-64 bg-gray-100 flex items-center justify-center border border-gray-300 rounded-lg shadow-md">
    <span className="text-gray-500">Health Trend Chart Placeholder</span>
  </div>
);

export default function HomePage() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [analysisResult, setAnalysisResult] = useState(null);
  const fileInputRef = useRef(null);

  const healthData = {
    bloodSugar: 120,
    bloodPressure: "120/80",
    weight: 70,
  };

  const foodRecommendations = [
    "Whole grain bread",
    "Leafy greens",
    "Lean chicken",
    "Berries",
  ];

  const handleImageUpload = (event) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedImage(file);
    }
  };

  const handleCameraCapture = () => {
    // In a real application, this would open the device camera
    console.log("Opening camera...");
  };

  const analyzeFood = () => {
    // Simulating food analysis
    setAnalysisResult(
      "This food item contains approximately 250 calories. Recommended portion: 1 cup."
    );
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-12 text-gray-800">
          Welcome, John Doe
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <Card className="shadow-lg">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Blood Sugar</CardTitle>
              <Droplet className="h-4 w-4 text-blue-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {healthData.bloodSugar} mg/dL
              </div>
            </CardContent>
          </Card>
          <Card className="shadow-lg">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Blood Pressure
              </CardTitle>
              <Activity className="h-4 w-4 text-red-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {healthData.bloodPressure} mmHg
              </div>
            </CardContent>
          </Card>
          <Card className="shadow-lg">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Weight</CardTitle>
              <Apple className="h-4 w-4 text-green-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{healthData.weight} kg</div>
            </CardContent>
          </Card>
        </div>

        <div className="  mb-8">
          {
            <Card className="mb-16 shadow-lg">
              {" "}
              {/* Increased margin */}
              <CardHeader>
                <CardTitle className="text-xl">Health Trends</CardTitle>
              </CardHeader>
              <CardContent>
                <HealthTrendChart />
              </CardContent>
            </Card>
          }
        </div>

        <div className="  mb-8">
          <Card className="mb-16  shadow-lg">
            {" "}
            {/* Increased margin */}
            <CardHeader>
              <CardTitle className="text-xl">Analyze Your Food</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="flex space-x-4">
                  <Button
                    onClick={() => fileInputRef.current?.click()}
                    className="bg-blue-500 hover:bg-blue-600 text-white"
                  >
                    <Upload className="w-4 h-4 mr-2" />
                    Upload Image
                  </Button>
                  <Button
                    onClick={handleCameraCapture}
                    className="bg-green-500 hover:bg-green-600 text-white"
                  >
                    <Camera className="w-4 h-4 mr-2" />
                    Take Photo
                  </Button>
                  <Input
                    id="picture"
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="hidden"
                    ref={fileInputRef}
                  />
                </div>
                {selectedImage && (
                  <div className="mt-4">
                    <img
                      src={URL.createObjectURL(selectedImage)}
                      alt="Selected food"
                      className="max-w-full h-auto rounded-lg shadow-md mb-4"
                    />
                    <Button
                      onClick={analyzeFood}
                      className="bg-purple-500 hover:bg-purple-600 text-white"
                    >
                      Analyze Food
                    </Button>
                  </div>
                )}
                {analysisResult && (
                  <div className="mt-6 p-4 bg-white rounded-lg shadow-md">
                    <h3 className="font-semibold mb-2 text-gray-800">
                      Analysis Result:
                    </h3>
                    <p className="text-gray-600">{analysisResult}</p>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="mb-16 shadow-lg">
          {" "}
          {/* Increased margin */}
          <CardHeader>
            <CardTitle className="text-xl">Recommended Food Items</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              {foodRecommendations.map((food, index) => (
                <li key={index}>{food}</li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <div className="mt-12">
          <Button className="bg-indigo-500 hover:bg-indigo-600 text-white">
            Update Health Data
          </Button>
        </div>
      </div>
    </div>
  );
}
