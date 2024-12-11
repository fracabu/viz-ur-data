"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, Activity, PieChart } from "lucide-react";
import { motion } from "framer-motion";

const categories = [
  {
    title: "Marketing Analytics",
    description: "Track campaign performance, customer behavior, and ROI metrics in real-time.",
    icon: LineChart,
    color: "text-blue-500",
    bgColor: "bg-blue-500/10",
  },
  {
    title: "Healthcare Insights",
    description: "Monitor patient outcomes, resource utilization, and operational efficiency.",
    icon: Activity,
    color: "text-green-500",
    bgColor: "bg-green-500/10",
  },
  {
    title: "Financial Intelligence",
    description: "Analyze market trends, risk metrics, and portfolio performance.",
    icon: PieChart,
    color: "text-purple-500",
    bgColor: "bg-purple-500/10",
  },
];

export default function CategoriesSection() {
  return (
    <section id="categories" className="py-24 bg-muted/50">
      <div className="container px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold tracking-tight mb-4">
            Tailored Solutions for Every Industry
          </h2>
          <p className="text-muted-foreground">
            Discover our specialized dashboard solutions designed to meet the unique needs of your industry.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {categories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="relative overflow-hidden">
                <CardHeader>
                  <div className={`p-3 w-12 h-12 rounded-lg ${category.bgColor} mb-4`}>
                    <category.icon className={`w-6 h-6 ${category.color}`} />
                  </div>
                  <CardTitle>{category.title}</CardTitle>
                  <CardDescription>{category.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="absolute bottom-0 right-0 w-24 h-24 opacity-10">
                    <category.icon className="w-full h-full" />
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}