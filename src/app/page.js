// "use client";

// import Header from "../components/Header";
// import HeroSection from "../components/HeroSection";
// import LeadGenerationForm from "../components/LeadGenerationForm";
// import ClientLogos from "../components/ClientLogos";
// import CTAAndFooter from "../components/CTAAndFooter";

// export default function Home() {
//   return (
//     <main>
//       <Header />
//       <HeroSection />
//       <LeadGenerationForm />
//       <ClientLogos />
//       <CTAAndFooter />
//     </main>
//   );
// }

"use client";

import { useEffect } from "react";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import LeadGenerationForm from "../components/LeadGenerationForm";
import ClientLogos from "../components/ClientLogos";
import CTAAndFooter from "../components/CTAAndFooter";
import { trackPageView, trackCustomEvent } from "../utils/gtm";

export default function Home() {
  useEffect(() => {
    // Track page view when component mounts
    trackPageView("home", "Sachhsoft - Landing Page");

    // Track page load time
    const loadTime = performance.now();
    trackCustomEvent("page_load_time", {
      load_time_ms: Math.round(loadTime),
      page: "home",
    });

    // Track scroll behavior
    let scrollTimeout;
    let maxScroll = 0;
    let scrollEvents = 0;
    let scrollMilestones = {
      25: false,
      50: false,
      75: false,
      100: false,
    };

    const handleScroll = () => {
      scrollEvents++;
      const scrollPercent = Math.round(
        (window.scrollY /
          (document.documentElement.scrollHeight - window.innerHeight)) *
          100
      );

      // Track maximum scroll depth
      if (scrollPercent > maxScroll) {
        maxScroll = scrollPercent;

        // Track scroll milestones (only once per milestone)
        if (scrollPercent >= 25 && !scrollMilestones["25"]) {
          scrollMilestones["25"] = true;
          trackCustomEvent("scroll_depth", { depth: "25%", page: "home" });
        } else if (scrollPercent >= 50 && !scrollMilestones["50"]) {
          scrollMilestones["50"] = true;
          trackCustomEvent("scroll_depth", { depth: "50%", page: "home" });
        } else if (scrollPercent >= 75 && !scrollMilestones["75"]) {
          scrollMilestones["75"] = true;
          trackCustomEvent("scroll_depth", { depth: "75%", page: "home" });
        } else if (scrollPercent >= 100 && !scrollMilestones["100"]) {
          scrollMilestones["100"] = true;
          trackCustomEvent("scroll_depth", { depth: "100%", page: "home" });
        }
      }

      // Debounced scroll tracking
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        trackCustomEvent("user_scroll", {
          max_scroll_percent: maxScroll,
          scroll_events: scrollEvents,
          page: "home",
        });
      }, 1000);
    };

    // Track time spent on page
    const startTime = Date.now();

    const trackTimeSpent = () => {
      const timeSpent = Math.round((Date.now() - startTime) / 1000);
      trackCustomEvent("time_on_page", {
        time_seconds: timeSpent,
        max_scroll_percent: maxScroll,
        page: "home",
      });
    };

    // Track mouse movement (user engagement)
    let mouseMovements = 0;
    let mouseMoveTimeout;
    const handleMouseMove = () => {
      mouseMovements++;

      // Throttle mouse movement tracking
      clearTimeout(mouseMoveTimeout);
      mouseMoveTimeout = setTimeout(() => {
        // Track significant mouse activity
        if (mouseMovements > 10) {
          trackCustomEvent("mouse_activity", {
            movement_count: mouseMovements,
            page: "home",
          });
          mouseMovements = 0; // Reset counter
        }
      }, 2000);
    };

    // Track clicks anywhere on page
    let totalClicks = 0;
    const handleClick = (e) => {
      totalClicks++;
      trackCustomEvent("page_interaction", {
        interaction_type: "click",
        element_tag: e.target.tagName,
        element_class: e.target.className,
        total_clicks: totalClicks,
        page: "home",
      });
    };

    // Track user engagement after 10 seconds
    const engagementTimer = setTimeout(() => {
      const currentTimeOnPage = Math.round((Date.now() - startTime) / 1000);
      trackCustomEvent("user_engagement", {
        time_on_page_seconds: currentTimeOnPage,
        mouse_movements: mouseMovements,
        total_clicks: totalClicks,
        max_scroll_percent: maxScroll,
        engagement_level:
          mouseMovements > 50 || totalClicks > 0 || maxScroll > 25
            ? "high"
            : "low",
        page: "home",
      });
    }, 10000);

    // Track session start
    trackCustomEvent("session_start", {
      page: "home",
      timestamp: new Date().toISOString(),
      user_agent: navigator.userAgent,
      screen_resolution: `${screen.width}x${screen.height}`,
      viewport_size: `${window.innerWidth}x${window.innerHeight}`,
    });

    // Add event listeners
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("beforeunload", trackTimeSpent);
    document.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.addEventListener("click", handleClick);

    // Cleanup function
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("beforeunload", trackTimeSpent);
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("click", handleClick);
      clearTimeout(scrollTimeout);
      clearTimeout(mouseMoveTimeout);
      clearTimeout(engagementTimer);

      // Track final session data
      trackTimeSpent();

      // Track session end
      trackCustomEvent("session_end", {
        page: "home",
        final_time_seconds: Math.round((Date.now() - startTime) / 1000),
        final_scroll_percent: maxScroll,
        total_interactions: totalClicks,
      });
    };
  }, []);

  return (
    <main>
      <Header />
      <HeroSection />
      <LeadGenerationForm />
      <ClientLogos />
      <CTAAndFooter />
    </main>
  );
}
