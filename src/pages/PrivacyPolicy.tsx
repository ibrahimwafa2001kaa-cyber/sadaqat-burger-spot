import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const PrivacyPolicy = () => {
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
            حریم خصوصی
          </h1>
          <p className="text-lg text-muted-foreground font-persian">
            آخرین بروزرسانی: ۱ دی ۱۴۰۳
          </p>
        </div>

        <div className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle className="font-persian text-xl">جمع‌آوری اطلاعات</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 font-persian">
              <p>
                رستوران صداقت برگر اطلاعات شما را تنها برای بهبود خدمات و ارتباط بهتر جمع‌آوری می‌کند.
              </p>
              <ul className="list-disc pr-6 space-y-2">
                <li>نام و شماره تماس برای پردازش سفارشات</li>
                <li>آدرس برای تحویل غذا (در صورت نیاز)</li>
                <li>اطلاعات بازخورد و نظرات شما</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="font-persian text-xl">استفاده از اطلاعات</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 font-persian">
              <p>اطلاعات شما تنها برای موارد زیر استفاده می‌شود:</p>
              <ul className="list-disc pr-6 space-y-2">
                <li>پردازش و تحویل سفارشات</li>
                <li>ارتباط در مورد سفارشات و خدمات</li>
                <li>بهبود کیفیت خدمات</li>
                <li>ارسال اطلاعات منوی جدید (در صورت درخواست)</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="font-persian text-xl">حفاظت از اطلاعات</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 font-persian">
              <p>
                ما متعهد به حفاظت از اطلاعات شخصی شما هستیم:
              </p>
              <ul className="list-disc pr-6 space-y-2">
                <li>اطلاعات شما هرگز به اشخاص ثالث فروخته نمی‌شود</li>
                <li>دسترسی به اطلاعات تنها توسط کارکنان مجاز</li>
                <li>حذف اطلاعات پس از مدت زمان مورد نیاز</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="font-persian text-xl">حقوق شما</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 font-persian">
              <p>شما حق دارید:</p>
              <ul className="list-disc pr-6 space-y-2">
                <li>درخواست مشاهده اطلاعات ذخیره شده</li>
                <li>درخواست اصلاح اطلاعات نادرست</li>
                <li>درخواست حذف اطلاعات شخصی</li>
                <li>انصراف از دریافت پیام‌های تبلیغاتی</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="font-persian text-xl">تماس با ما</CardTitle>
            </CardHeader>
            <CardContent className="font-persian">
              <p className="mb-4">
                برای هرگونه سوال یا درخواست در مورد حریم خصوصی:
              </p>
              <div className="bg-muted/50 p-4 rounded-lg">
                <p><strong>تلفن:</strong> +93789963664</p>
                <p><strong>آدرس:</strong> افغانستان، پروان، چاریکار - جنب گذر اکرم خان</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;