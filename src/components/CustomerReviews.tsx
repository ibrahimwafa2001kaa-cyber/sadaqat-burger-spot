import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function CustomerReviews() {
  const [reviews, setReviews] = useState([
    { name: "علی احمدی", address: "چهارراهی سرسبزی", province: "کابل", text: "برگرهاتون عالی بود، خیلی خوشمزه و تازه 👌" },
    { name: "زهرا رضایی", address: "نزدیک پل باغ عمومی", province: "پروان", text: "محیط تمیز و برخورد عالی پرسنل 👏" }
  ]);

  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [province, setProvince] = useState("کابل");
  const [text, setText] = useState("");

  const provinces = [
    "کابل", "پروان", "بلخ", "هرات", "ننگرهار", "قندهار", "کندز", "تخار", "بغلان", "بدخشان", "لوگر", "پکتیا", "پکتیکا", "خوست", "غزنی", "وردک", "سمنگان", "سرپل", "جوزجان", "فاریاب", "نورستان", "کنر", "لغمان", "بدغیس", "دایکندی", "بامیان", "هلمند", "زابل", "غور", "فراه", "نیمروز", "کاپیسا", "پنجشیر", "ارزگان"
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !address || !text) return;
    setReviews([{ name, address, province, text }, ...reviews]);
    setName("");
    setAddress("");
    setProvince("کابل");
    setText("");
  };

  return (
    <div className="max-w-3xl mx-auto py-12 px-4">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-bold text-center mb-8"
      >
        💬 نظر مشتریان
      </motion.h2>

      {/* فرم ثبت نظر */}
      <Card className="mb-8 shadow-lg border border-gray-200 dark:border-gray-700">
        <CardContent className="p-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              placeholder="نام و نام خانوادگی"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <Input
              placeholder="آدرس"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />

            {/* انتخاب ولایت */}
            <Select value={province} onValueChange={setProvince}>
              <SelectTrigger>
                <SelectValue placeholder="انتخاب ولایت" />
              </SelectTrigger>
              <SelectContent>
                {provinces.map((prov, idx) => (
                  <SelectItem key={idx} value={prov}>
                    {prov}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Textarea
              placeholder="نظر خود را بنویسید..."
              value={text}
              onChange={(e) => setText(e.target.value)}
              rows={3}
            />
            <Button type="submit" className="w-full rounded-2xl">
              ارسال نظر
            </Button>
          </form>
        </CardContent>
      </Card>

      {/* نمایش نظرات */}
      <div className="space-y-4">
        {reviews.map((review, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <Card className="shadow-md bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700">
              <CardContent className="p-4">
                <p className="font-semibold text-lg">{review.name}</p>
                <p className="text-gray-600 dark:text-gray-400 text-sm">📍 {review.address} - {review.province}</p>
                <p className="text-gray-700 dark:text-gray-300 mt-2">{review.text}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}