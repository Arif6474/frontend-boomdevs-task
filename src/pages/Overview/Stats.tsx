import { StatsCard } from "../../components/ui/StatsCard"
import { CircleDollarSign, TotalCustomerSign, TotalOrderSing, TotalSaleSign } from '../../components/elements/icons';

function Stats({ data } : { data: any }) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
            <StatsCard
                icon={<CircleDollarSign />}
                title='Monthly Earnings'
                value={data?.currentEarnings ? `$${data?.currentEarnings}` : '$0'}
                percentageChange={data?.previousMonthComparison?.earningsPercentageChange}
                beforeText={`Earnings ${data?.previousMonthComparison?.earningsPercentageChange > 0 ? 'increased' : 'decreased'} by`}
                difference={`$${data?.previousMonthComparison?.earningsDifference ? data?.previousMonthComparison?.earningsDifference : 0}`}
                afterText='this month'
            />
            <StatsCard
                icon={<TotalOrderSing />}
                title='Total Orders'
                value={data?.currentOrders ? data?.currentOrders : 0}
                percentageChange={data?.previousMonthComparison.ordersPercentageChange}
                beforeText={`Orders ${data?.previousMonthComparison.ordersPercentageChange > 0 ? 'increased' : 'decreased'} by `}
                difference={data?.previousMonthComparison?.ordersDifference ? data?.previousMonthComparison?.ordersDifference : 0}
                afterText='more orders this month'
            />
            <StatsCard
                icon={<TotalSaleSign />}
                title='Total Sales'
                value={data?.currentSales ? `$${data?.currentSales}` : '$0'}
                percentageChange={data?.previousMonthComparison.salesPercentageChange}
                beforeText={`Sales revenue ${data?.previousMonthComparison.salesPercentageChange > 0 ? 'increased' : 'decreased'} by`}
                difference={`$${data?.previousMonthComparison?.salesDifference ? data?.previousMonthComparison?.salesDifference : 0}`}
                afterText='this month'
            />
            <StatsCard
                icon={<TotalCustomerSign />}
                title='New Customers'
                value={data?.currentCustomers ? data?.currentCustomers : 0}
                percentageChange={data?.previousMonthComparison.customersPercentageChange}
                beforeText='Gained'
                difference={data?.previousMonthComparison?.ordersDifference}
                afterText='new customers this month'
            />

        </div>
    )
}

export default Stats