import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Terms = () => {
  return (
    <div className="min-h-screen bg-background py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="mb-8">
          <Button variant="outline" size="sm" className="font-persian mb-4" asChild>
            <Link to="/">
              <ArrowRight className="w-4 h-4 ml-2" />
              بازگشت به صفحه اصلی
            </Link>
          </Button>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-persian text-primary">
            شرایط و قوانین
          </h1>
          <p className="text-lg text-muted-foreground font-persian">
            آخرین بروزرسانی: ۱ دی ۱۴۰۳
          </p>
        </div>

        <div className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle className="font-persian text-xl">شرایط سفارش</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 font-persian">
              <ul className="list-disc pr-6 space-y-2">
                <li>سفارشات از طریق تماس تلفنی +93789963664 پذیرفته می‌شود</li>
                <li>حداقل زمان آماده‌سازی ۱۰ دقیقه می‌باشد</li>
                <li>قیمت‌های اعلام شده شامل مالیات است</li>
                <li>امکان تغییر یا لغو سفارش تا ۵ دقیقه پس از ثبت وجود دارد</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="font-persian text-xl">پرداخت</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 font-persian">
              <ul className="list-disc pr-6 space-y-2">
                <li>پرداخت در محل تحویل یا در رستوران</li>
                <li>ارز پذیرفته شده: افغانی</li>
                <li>در صورت عدم رضایت، امکان بازگردان وجه تا ۱۰ دقیقه پس از تحویل</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="font-persian text-xl">کیفیت و بهداشت</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 font-persian">
              <ul className="list-disc pr-6 space-y-2">
                <li>تمام مواد اولیه روزانه تازه تهیه می‌شود</li>
                <li>رعایت کامل اصول بهداشتی در آماده‌سازی</li>
                <li>استفاده از گوشت ۱۰۰% حلال</li>
                <li>کنترل کیفیت در تمام مراحل تولید</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="font-persian text-xl">مسئولیت</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 font-persian">
              <p>
                رستوران صداقت برگر متعهد به ارائه بهترین کیفیت و خدمات است. در صورت بروز هرگونه مشکل، 
                لطفاً فوراً با ما تماس بگیرید.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="font-persian text-xl">ساعات کاری</CardTitle>
            </CardHeader>
            <CardContent className="font-persian">
              <div className="bg-muted/50 p-4 rounded-lg">
                <p><strong>شنبه تا پنج‌شنبه:</strong> ۶ صبح - ۸ شب</p>
                <p><strong>جمعه‌ها:</strong> ۵:۳۰ صبح - ۷:۴۵ شب</p>
                <p className="mt-2 text-sm text-muted-foreground">
                  در روزهای تعطیلی رسمی ممکن است ساعات کاری تغییر کند.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="font-persian text-xl">تماس</CardTitle>
            </CardHeader>
            <CardContent className="font-persian">
              <div className="bg-muted/50 p-4 rounded-lg">
                <p><strong>مدیر:</strong> قاری صاحب صفی الله محمدی</p>
                <p><strong>تلفن:</strong> +93789963664</p>
                <p><strong>آدرس:</strong> افغانستان، پروان، چاریکار - جنب گذر اکرم خان مقابل شیریخ پزی حاجی جان آغا</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Terms;