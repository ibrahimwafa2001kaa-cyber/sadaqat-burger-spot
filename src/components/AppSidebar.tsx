import { Share2, MessageCircle, Send, Facebook, Twitter, Copy, CheckCircle, Moon, Sun, Monitor, Globe } from "lucide-react";
import { useState } from "react";
import { useTheme } from "next-themes";
import { useLanguage } from "@/contexts/LanguageContext";
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
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";

export function AppSidebar() {
  const [copiedLink, setCopiedLink] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const { theme, setTheme } = useTheme();
  const restaurantUrl = window.location.href;
  const restaurantName = language === 'fa' ? "صداقت برگر - رستوران" : "د صداقت برګر - رستوران";

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
      name: t('whatsapp'),
      icon: MessageCircle,
      url: `https://wa.me/?text=${encodeURIComponent(`${restaurantName} - ${restaurantUrl}`)}`,
      color: "text-green-600",
    },
    {
      name: t('telegram'),
      icon: Send,
      url: `https://t.me/share/url?url=${encodeURIComponent(restaurantUrl)}&text=${encodeURIComponent(restaurantName)}`,
      color: "text-blue-500",
    },
    {
      name: t('facebook'),
      icon: Facebook,
      url: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(restaurantUrl)}`,
      color: "text-blue-600",
    },
    {
      name: t('twitter'),
      icon: Twitter,
      url: `https://twitter.com/intent/tweet?url=${encodeURIComponent(restaurantUrl)}&text=${encodeURIComponent(`${restaurantName} - بهترین رستوران!`)}`,
      color: "text-blue-400",
    },
  ];

  const handleThemeToggle = () => {
    if (theme === "light") setTheme("dark");
    else if (theme === "dark") setTheme("system");
    else setTheme("light");
  };

  const getThemeIcon = () => {
    if (theme === "light") return Sun;
    if (theme === "dark") return Moon;
    return Monitor;
  };

  const getThemeLabel = () => {
    if (theme === "light") return t('light');
    if (theme === "dark") return t('dark');
    return t('system');
  };

  return (
    <Sidebar className="border-r border-sidebar-border">
      <SidebarContent>
        {/* Language Selector */}
        <SidebarGroup>
          <SidebarGroupLabel className="font-persian text-lg font-bold">
            <Globe className="w-5 h-5 ml-2" />
            {t('language')}
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <Card className="mt-4">
              <CardContent className="pt-6">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" className="w-full flex items-center gap-2 font-persian">
                      <Globe className="w-5 h-5" />
                      {t('language')}: {language === "fa" ? t('dari') : t('pashto')}
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="bg-background border border-border">
                    <DropdownMenuItem onClick={() => setLanguage("fa")} className="font-persian">
                      {t('dari')}
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => setLanguage("ps")} className="font-persian">
                      {t('pashto')}
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </CardContent>
            </Card>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel className="font-persian text-lg font-bold">
            <Share2 className="w-5 h-5 ml-2" />
            {t('share')}
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <Card className="mt-4">
              <CardHeader className="pb-3">
                <CardTitle className="font-persian text-base flex items-center">
                  <Share2 className="w-4 h-4 ml-2" />
                  {t('share')}
                </CardTitle>
                <CardDescription className="font-persian text-sm">
                  {t('shareDescription')}
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
                      {t('copied')}
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      {t('copyLink')}
                    </>
                  )}
                </Button>
              </CardContent>
            </Card>

            {/* Dark Mode Toggle */}
            <Card className="mt-4">
              <CardContent className="pt-6">
                <Button
                  onClick={handleThemeToggle}
                  variant="outline"
                  size="sm"
                  className="w-full font-persian flex items-center justify-between"
                >
                  <div className="flex items-center gap-2">
                    {(() => {
                      const IconComponent = getThemeIcon();
                      return <IconComponent className="w-4 h-4" />;
                    })()}
                    <span>{t('darkMode')}</span>
                  </div>
                  <span className="text-xs bg-muted px-2 py-1 rounded-full">
                    {getThemeLabel()}
                  </span>
                </Button>
              </CardContent>
            </Card>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}