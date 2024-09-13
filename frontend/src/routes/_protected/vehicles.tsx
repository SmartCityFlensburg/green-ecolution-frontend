import { createFileRoute } from "@tanstack/react-router";
import { Separator } from "../../components/ui/separator";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../components/ui/table";
import { Button } from "../../components/ui/button";
import { Edit, PlusCircleIcon, Trash, Filter } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "../../components/ui/popover";
import { Checkbox } from "../../components/ui/checkbox";

export const Route = createFileRoute("/_protected/vehicles")({
  component: Vehicles,
});

const vehicles = [
  {
    title: "LF 10",
    licensePlate: "FL-TB-1235",
    type: "Wasserfahrzeug",
    location: "Klärwerk",
    status: "Verfügbar",
  },
  {
    title: "LF 20",
    licensePlate: "FL-TB-1235",
    type: "Wasserfahrzeug",
    location: "TBZ Standort",
    status: "Verfügbar",
  },
  {
    title: "LF 10",
    licensePlate: "FL-TB-1235",
    type: "Wasserfahrzeug",
    location: "TBZ Standort",
    status: "Verfügbar",
  },
  {
    title: "LF 20",
    licensePlate: "FL-TB-1235",
    type: "Pritschenwagen",
    location: "Klärwerk",
    status: "Nicht verfügbar",
  },
];

function Vehicles() {
  return (
    <div className="container mt-6">
      <article className="mb-20 2xl:w-4/5">
        <h1 className="font-lato font-bold text-3xl mb-4 lg:text-4xl xl:text-5xl">
          Auflistung aller Mitarbeitenden
        </h1>
        <p>
          Eu ipsum occaecat non exercitation occaecat ea aute fugiat quis magna do veniam commodo.
          Magna Lorem cupidatat id fugiat nostrud quis qui in quis fugiat. Irure pariatur anim cupidatat nulla ipsum Lorem irure. 
          Est elit laborum sunt commodo officia nulla cupidatat fugiat tempor exercitation laborum. Sint irure eiusmod sunt. 
          Magna esse proident magna dolore aliqua nulla id sunt adipisicing.
        </p>
      </article>

      {/* @TODO update vehicles page to corporate design */}
      <div className="h-[48px] flex items-center justify-between mx-2">
        <div className="flex items-center">
          <h1 className="font-bold text-xl">Fahrzeuge</h1>
        </div>

        <div className="flex items-center gap-2">
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="ghost" size="icon">
                <Filter className="w-6 h-6" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-80 flex flex-col gap-3">
              <h1 className="font-bold text-xl">Filter</h1>
              <div>
                <h2 className="font-bold ml-1">Status</h2>
                <ul className="ml-2">
                  <li>
                    <Checkbox id="statusVerfuegbar" />
                    <label htmlFor="statusVerfuegbar" className="ml-1">
                      Verfügbar
                    </label>
                  </li>
                  <li>
                    <Checkbox id="statusNichtVerfuegbar" />
                    <label htmlFor="statusNichtVerfuegbar" className="ml-1">
                      Nicht Verfügbar
                    </label>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="font-bold ml-1">Typ</h2>
                <ul className="ml-2">
                  <li>
                    <Checkbox id="gaertner" />
                    <label htmlFor="gaertner" className="ml-1">
                      Wasserfahrzeug
                    </label>
                  </li>
                  <li>
                    <Checkbox id="foerster" />
                    <label htmlFor="foerster" className="ml-1">
                      Pritschenwagen
                    </label>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="font-bold ml-1">Standort</h2>
                <ul className="ml-2">
                  <li>
                    <Checkbox id="gaertner" />
                    <label htmlFor="gaertner" className="ml-1">
                      Klärwerk
                    </label>
                  </li>
                  <li>
                    <Checkbox id="foerster" />
                    <label htmlFor="foerster" className="ml-1">
                      TBZ
                    </label>
                  </li>
                </ul>
              </div>
            </PopoverContent>
          </Popover>
          <Button variant="default">
            <PlusCircleIcon className="w-4 h-4" />
            <span className="ml-2">Fahrzeug hinzufügen</span>
          </Button>
        </div>
      </div>
      <Separator />

      <div className="p-4">
        <div className="flex justify-end items-center"></div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Beziechnung</TableHead>
              <TableHead>Kennzeichen</TableHead>
              <TableHead>Typ</TableHead>
              <TableHead>Standort</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Aktion</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {vehicles.map((vehicle) => (
              <TableRow key={vehicle.title}>
                <TableCell className="font-medium">{vehicle.title}</TableCell>
                <TableCell>{vehicle.licensePlate}</TableCell>
                <TableCell>{vehicle.type}</TableCell>
                <TableCell>{vehicle.location}</TableCell>
                <TableCell>{vehicle.status}</TableCell>
                <TableCell className="text-right">
                  <Button variant="ghost" size="icon">
                    <Edit className="w-4 h-4" />
                  </Button>
                  <Button variant="ghost" size="icon">
                    <Trash className="w-4 h-4" />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
