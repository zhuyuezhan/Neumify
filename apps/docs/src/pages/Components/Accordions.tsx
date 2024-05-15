import React from 'react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from 'neumify'
import { Shelf } from '@/components/Shelf'

const Accordions: React.FC = () => {
  return (
    <div className="flex flex-col items-center gap-4">
      <Shelf title="outset + single">
        <Accordion type="single" collapsible variant="outset" className="w-96">
          <AccordionItem value="item-1">
            <AccordionTrigger>杂诗三首（其二）</AccordionTrigger>
            <AccordionContent className="flex items-center justify-center">
              君自故乡来，应知故乡事。
              <br />
              来日绮窗前，寒梅著花未？
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>饮酒（其五）</AccordionTrigger>
            <AccordionContent className="flex items-center justify-center">
              结庐在人境，而无车马喧。
              <br />
              问君何能尔？ 心远地自偏。
              <br />
              采菊东篱下，悠然见南山。
              <br />
              山气日夕佳，飞鸟相与还。
              <br />
              此中有真意，欲辨已忘言。
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>相思</AccordionTrigger>
            <AccordionContent className="flex items-center justify-center">
              红豆生南国，春来发几枝？
              <br />
              愿君多采撷，此物最相思。
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </Shelf>
      <Shelf title="inset + multiple">
        <Accordion type="multiple" variant="inset" className="w-96">
          <AccordionItem value="item-1">
            <AccordionTrigger>宿建德江</AccordionTrigger>
            <AccordionContent className="flex items-center justify-center">
              移舟泊烟渚，日暮客愁新。
              <br />
              野旷天低树，江清月近人。
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>八阵图</AccordionTrigger>
            <AccordionContent className="flex items-center justify-center">
              功盖三分国，名成八阵图。
              <br />
              江流石不转，遗恨失吞吴。
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>竹里馆</AccordionTrigger>
            <AccordionContent className="flex items-center justify-center">
              独坐幽篁里，弹琴复长啸。
              <br />
              深林人不知，明月来相照。
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </Shelf>
    </div>
  )
}

export { Accordions }
