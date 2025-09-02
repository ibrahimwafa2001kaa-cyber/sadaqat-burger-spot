import { Share2, MessageCircle, Send, Facebook, Twitter, Copy, CheckCircle } from "lucide-react";
import { useState } from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export function AppSidebar() {
  const [copiedLink, setCopiedLink] = useState(false);
  const restaurantUrl = window.location.href;
  const restaurantName = "صداقت برگر - رستوران";

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(restaurantUrl);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2000);
    } catch (err) {
      console.error('Failed to copy link:', err);
    }
  };

  const shareLinks = [
    {
      name: "واتساپ",
      icon: MessageCircle,
      url: `https://wa.me/?text=${encodeURIComponent(`${restaurantName} - ${restaurantUrl}`)}`,
      color: "text-green-600",
    },
    {
      name: "تلگرام",
      icon: Send,
      url: `https://t.me/share/url?url=${encodeURIComponent(restaurantUrl)}&text=${encodeURIComponent(restaurantName)}`,
      color: "text-blue-500",
    },
    {
      name: "فیسبوک",
      icon: Facebook,
      url: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(restaurantUrl)}`,
      color: "text-blue-600",
    },
    {
      name: "توییتر",
      icon: Twitter,
      url: `https://twitter.com/intent/tweet?url=${encodeURIComponent(restaurantUrl)}&text=${encodeURIComponent(`${restaurantName} - بهترین رستوران!`)}`,
      color: "text-blue-400",
    },
  ];

  return (
    <Sidebar className="border-r border-sidebar-border">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="font-persian text-lg font-bold">
            <Share2 className="w-5 h-5 ml-2" />
            اشتراک‌گذاری
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <Card className="mt-4">
              <CardHeader className="pb-3">
                <CardTitle className="font-persian text-base flex items-center">
                  <Share2 className="w-4 h-4 ml-2" />
                  اشتراک‌گذاری
                </CardTitle>
                <CardDescription className="font-persian text-sm">
                  لینک رستوران ما را با دوستانتان به اشتراک بگذارید
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <SidebarMenu>
                  {shareLinks.map((link) => (
                    <SidebarMenuItem key={link.name}>
                      <SidebarMenuButton asChild>
                        <a
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-3 py-2 px-3 rounded-md hover:bg-sidebar-accent transition-smooth font-persian"
                        >
                          <link.icon className={`w-5 h-5 ${link.color}`} />
                          <span>{link.name}</span>
                        </a>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
                
                <Button
                  onClick={handleCopyLink}
                  variant="outline"
                  size="sm"
                  className="w-full font-persian flex items-center gap-2"
                >
                  {copiedLink ? (
                    <>
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      کپی شد!
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      کپی لینک
                    </>
                  )}
                </Button>
              </CardContent>
            </Card>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}