

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Filter } from "lucide-react";

export function AccordionDemo() {
  return (
      <div className="p-5">
          {/* Header */}
          <div className="flex justify-between items-center">
              <h1 className="font-bold">Filter</h1>
              <Filter />
          </div>

          {/* Accordion */}
          <Accordion type="single" collapsible className="w-full mt-4">
              {/* Item 1 */}
              <AccordionItem value="item-1">
                  <AccordionTrigger>T-shirts</AccordionTrigger>
                  <AccordionContent>
                      Find a wide range of T-shirts designed for your comfort and style.
                  </AccordionContent>
              </AccordionItem>

              {/* Item 2 */}
              <AccordionItem value="item-2">
                  <AccordionTrigger>Shorts</AccordionTrigger>
                  <AccordionContent>
                      Explore trendy shorts that blend functionality with aesthetics.
                  </AccordionContent>
              </AccordionItem>

              {/* Item 3 */}
              <AccordionItem value="item-3">
                  <AccordionTrigger>Shirts</AccordionTrigger>
                  <AccordionContent>
                      Yes, it's animated by default, but you can disable it if you prefer.
                  </AccordionContent>
              </AccordionItem>

              {/* Item 4 */}
              <AccordionItem value="item-4">
                  <AccordionTrigger>Hoodie</AccordionTrigger>
                  <AccordionContent>
                      Stay cozy with our selection of hoodies designed for ultimate comfort.
                  </AccordionContent>
              </AccordionItem>

              {/* Item 5 */}
              <AccordionItem value="item-5">
                  <AccordionTrigger>Jeans</AccordionTrigger>
                  <AccordionContent>
                      Browse our collection of jeans that fit perfectly for any occasion.
                  </AccordionContent>
              </AccordionItem>
          </Accordion>
      </div>
  );
}

  