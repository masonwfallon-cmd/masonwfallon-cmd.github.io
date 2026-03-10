import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, MapPin, Calendar, FileText } from "lucide-react";

// Replace with your Formspree form URL (from formspree.io → your form → Integration)
const FORMSPREE_ENDPOINT = "https://formspree.io/f/xreypjzl";

export default function PickupOrder() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
    pickupDate: "",
    pickupTime: "",
    items: "",
    notes: "",
  });

  const [submitting, setSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState<string | null>(null);
  const [statusType, setStatusType] = useState<"success" | "error" | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setStatusMessage(null);
    setStatusType(null);

    try {
      const formPayload = new FormData();
      formPayload.append("name", formData.name);
      formPayload.append("phone", formData.phone);
      formPayload.append("address", formData.address);
      formPayload.append("pickupDate", formData.pickupDate);
      formPayload.append("pickupTime", formData.pickupTime);
      formPayload.append("items", formData.items);
      formPayload.append("notes", formData.notes);

      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: formPayload,
        headers: { Accept: "application/json" },
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || data.error || "Request failed");
      }

      setStatusType("success");
      setStatusMessage(
        "Thank you! Your pickup request has been sent. We'll contact you soon to confirm."
      );
      setFormData({
        name: "",
        phone: "",
        address: "",
        pickupDate: "",
        pickupTime: "",
        items: "",
        notes: "",
      });
    } catch (error) {
      setStatusType("error");
      setStatusMessage(
        `Could not send request: ${error instanceof Error ? error.message : "Please try again."} Call us at (410) 867-1694 to place your order.`
      );
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-fresh-blue-light to-white">
      <header className="bg-white shadow-sm border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <img
              src="/logo.jpg"
              alt="Fresh Start Laundry Co. Logo"
              className="h-10 w-auto rounded"
            />
            <div>
              <p className="text-sm font-semibold text-gray-900">
                Fresh Start Laundry Co.
              </p>
              <p className="text-xs text-gray-500">
                Pickup & Delivery Order Request
              </p>
            </div>
          </div>
          <div className="hidden sm:flex items-center space-x-4 text-sm text-gray-600">
            <div className="flex items-center">
              <Phone className="h-4 w-4 text-fresh-blue mr-2" />
              <span>(410) 867-1694</span>
            </div>
            <div className="flex items-center">
              <MapPin className="h-4 w-4 text-fresh-blue mr-2" />
              <span>5471 Deale Churchton Rd, Churchton, MD</span>
            </div>
          </div>
        </div>
      </header>

      <main className="py-10">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 text-center">
            Schedule Pickup & Delivery
          </h1>
          <p className="text-gray-600 text-center mb-8 max-w-2xl mx-auto">
            Fill out the form below to request a pickup and drop-off for your
            laundry. We’ll review your request and contact you to confirm the
            details.
          </p>

          <Card className="shadow-lg">
            <CardContent className="p-6 sm:p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Name *
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-fresh-blue focus:ring-fresh-blue text-sm sm:text-base"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Phone Number *
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-fresh-blue focus:ring-fresh-blue text-sm sm:text-base"
                      placeholder="Best number to reach you"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="address"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Pickup Address *
                  </label>
                  <textarea
                    id="address"
                    name="address"
                    required
                    value={formData.address}
                    onChange={handleChange}
                    className="block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-fresh-blue focus:ring-fresh-blue text-sm sm:text-base"
                    rows={2}
                    placeholder="Street, city, ZIP"
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="pickupDate"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Pickup Date *
                    </label>
                    <div className="relative">
                      <input
                        id="pickupDate"
                        name="pickupDate"
                        type="date"
                        required
                        value={formData.pickupDate}
                        onChange={handleChange}
                        className="block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-fresh-blue focus:ring-fresh-blue text-sm sm:text-base"
                      />
                      <Calendar className="h-4 w-4 text-gray-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="pickupTime"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Preferred Pickup Time *
                    </label>
                    <input
                      id="pickupTime"
                      name="pickupTime"
                      type="time"
                      required
                      value={formData.pickupTime}
                      onChange={handleChange}
                      className="block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-fresh-blue focus:ring-fresh-blue text-sm sm:text-base"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="items"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Items (optional but helpful)
                  </label>
                  <textarea
                    id="items"
                    name="items"
                    value={formData.items}
                    onChange={handleChange}
                    className="block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-fresh-blue focus:ring-fresh-blue text-sm sm:text-base"
                    rows={3}
                    placeholder="Approx. pounds of laundry, comforters, blankets, pillows, etc."
                  />
                </div>

                <div>
                  <label
                    htmlFor="notes"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Notes for Driver
                  </label>
                  <textarea
                    id="notes"
                    name="notes"
                    value={formData.notes}
                    onChange={handleChange}
                    className="block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-fresh-blue focus:ring-fresh-blue text-sm sm:text-base"
                    rows={3}
                    placeholder="Gate codes, special instructions, pets, or anything else we should know."
                  />
                </div>

                {statusMessage && (
                  <div
                    className={`rounded-md px-4 py-3 text-sm flex items-start space-x-2 ${
                      statusType === "success"
                        ? "bg-green-50 text-green-800 border border-green-200"
                        : "bg-red-50 text-red-800 border border-red-200"
                    }`}
                  >
                    <FileText className="h-4 w-4 mt-0.5" />
                    <p>{statusMessage}</p>
                  </div>
                )}

                <div className="flex items-center justify-between flex-col sm:flex-row gap-4">
                  <p className="text-xs text-gray-500 flex-1">
                    By submitting, you’re requesting a pickup. We’ll confirm your
                    exact pickup time by phone or text.
                  </p>
                  <Button
                    type="submit"
                    className="bg-fresh-blue text-white px-8 py-2 font-semibold hover:bg-fresh-blue-dark shadow-sm w-full sm:w-auto"
                    disabled={submitting}
                  >
                    {submitting ? "Sending..." : "Submit Pickup Order"}
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}

